import "./investors.css";
function VoteProposal({ state, account }) {
  async function vote(e) {
    try {
      e.preventDefault();
      const { contract } = state;
      const amount = document.querySelector("#voteId").value;
      await contract.methods
        .voteProposal(amount)
        .send({ from: account, gas: 480000 });
      console.log("Successfully Voted");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <form onSubmit={vote}>
        <label className="label1" htmlFor="voteId">
          <span className="font">Proposal Id:</span>
        </label>
        <input type="text" id="voteId"></input>
        <button className="button" type="submit">
          Vote
        </button>
      </form>
      <br></br>
    </>
  );
}
export default VoteProposal;
