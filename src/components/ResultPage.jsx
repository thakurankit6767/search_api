import React, { useEffect, useState } from "react";

function ResultsPage({ reslt }) {
  const [dataresult, setdataResult] = useState(reslt);
  useEffect(() => {
    setdataResult(reslt);
  }, [reslt]);
  return (
    <div>
      {dataresult.length != 0 &&
        dataresult.prop[0].map((e, i) => {
          return (
            <div>
              <img src={e.strMealThumb} style={{ width: "50px" }}></img>
              <div>
                <div key={i}>Name : {e.strMeal}</div>
                <div>Category : {e.strCategory}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ResultsPage;
