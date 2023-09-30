import "./manager.css";
function CreateProposal({ state, account }) {
  async function createProposal(e) {
    try {
      e.preventDefault();
      const { web3, contract } = state;
      const description = document.querySelector("#description").value;
      const amount = web3.utils.toWei(
        document.querySelector("#amount").value,
        "ether"
      );

      const recipient = document.querySelector("#recipient").value;
      await contract.methods
        .createProposal(description, amount, recipient)
        .send({ from: account, gas: 480000 });
      alert("Contracted Executed Successfully");
    } catch (error) {
      alert(error);
    }
    document.querySelector("#description").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector("#recipient").value = "";
  }

  return (
    <>
      <form onSubmit={createProposal}>
        <label className="label1" htmlFor="name">
          <span className="font">Description:</span>
        </label>
        <input type="text" id="description"></input>
        <label className="label1" htmlFor="amount">
          <span className="font"> Amount Neeed(in Wei):</span>
        </label>
        <input type="text" id="amount"></input>
        <label className="label1" htmlFor="recipient">
          <span className="font">Recipient Address:</span>
        </label>
        <input type="text" id="recipient"></input>
        <button className="button" type="submit">
          Create Proposal
        </button>
      </form>
      <br></br>
    </>
  );
}
export default CreateProposal;
