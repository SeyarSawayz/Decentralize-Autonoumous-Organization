import { useState, useEffect } from "react";
function InvestorList({ state }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    const { contract } = state;
    async function investorsList() {
      const listArr = await contract.methods.InvestorList().call();
      setList(listArr);
      console.log(listArr);
    }
    contract && investorsList();
  }, [state]);
  return (
    <>
      <div className="list">
        <h3>Investor's List</h3>
        {list.map((data, i) => {
          return <p key={i}>{data}</p>;
        })}
      </div>
    </>
  );
}
export default InvestorList;
