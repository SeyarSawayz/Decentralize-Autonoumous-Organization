import "./investors.css";
function TransferShare({ state, account }) {
  async function transferShare(e) {
    try {
      e.preventDefault();
      const { web3, contract } = state;
      const amount = document.querySelector("#amount").value;
      const amoutninWei = web3.utils.fromWei(amount, "ether");
      const address = document.querySelector("#to").value;
      await contract.methods
        .transferShare(amoutninWei, address)
        .send({ from: account, gas: 480000 });
      console.log("Funds Transfered SuccessFully");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <form onSubmit={transferShare}>
        <label className="label1" htmlFor="amount">
          <span className="font">Amount:</span>
        </label>
        <input type="text" id="amount"></input>
        <label className="label1" htmlFor="to">
          <span className="font">Address:</span>
        </label>
        <input type="text" id="to"></input>

        <button className="button" type="submit">
          Transfer Share
        </button>
      </form>
      <br></br>
    </>
  );
}
export default TransferShare;
