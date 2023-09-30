import "./investors.css";
function ReedemShare({ state, account }) {
  async function redeem(e) {
    try {
      e.preventDefault();
      const { contract } = state;
      const amount = document.querySelector("#shares").value;
      await contract.methods
        .reedemShare(amount)
        .send({ from: account, gas: 480000 });
      alert("Successfully Redeemed");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <form onSubmit={redeem}>
        <label className="label1" htmlFor="shares">
          <span className="font">Number of Shares:</span>
        </label>
        <input type="text" id="shares"></input>

        <button className="button" type="submit">
          Reedem Share
        </button>
      </form>
      <br></br>
    </>
  );
}
export default ReedemShare;
