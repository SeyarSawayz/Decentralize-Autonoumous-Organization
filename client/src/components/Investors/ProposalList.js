import { useState, useEffect } from "react";

function ProposalList({ state }) {
  const [proposalId, setProposalId] = useState([]);
  useEffect(() => {
    const { contract } = state;
    async function listProposals() {
      const arrayProposal = await contract.methods.ProposalList().call();
      setProposalId(arrayProposal);
      console.log(arrayProposal);
    }
    contract && listProposals();
  }, [state]);

  return (
    <>
      <div className="list">
        <h3>Proposal List</h3>
        {proposalId.map((data, i) => {
          return <p key={i}>{data}</p>;
        })}
      </div>
    </>
  );
}
export default ProposalList;
