import "./manager.css";
function ExecuteProposal({ state, account }) {
  async function proposal(e) {
    try {
      e.preventDefault();
      const { contract } = state;
      const id = document.querySelector("#id").value;
      await contract.method
        .executeProposal(id)
        .send({ from: account, gas: 480000 });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <form onSubmit={proposal}>
        <label className="label1" htmlFor="proposalId">
          <span className="font">Proposal Id:</span>
        </label>
        <input type="text" id="id"></input>
        <button className="button" type="submit">
          Execute
        </button>
      </form>
      <br></br>
    </>
  );
}
export default ExecuteProposal;
