import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchPage({ getData }) {
  const [search, setSearch] = useState("");

  const postData = () => {
    axios({
      url: "https://www.themealdb.com/api/json/v1/1/search.php",
      method: "POST",
      params: {
        s: search,
      },
    })
      .then((reslt) => {
        getData([reslt.data.meals]);
        console.log(reslt.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        onChange={(elem) => {
          setSearch(elem.target.value);
        }}
        type="text"
        name="search"
        id=""
      />
      <button onClick={postData}>submit</button>
    </div>
  );
}

export default SearchPage;
