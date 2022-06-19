
import Search from './components/SearchPage';
import Results from './components/ResultPage';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const [reslt,setreslt] = useState([]);
  useEffect(()=>{
    setreslt(data)
  },[data])
 
  const getData = (prop)=>{
    setData({prop});
  }
 
  console.log(data.prop);


  return (
    <div className="App">
      <Search  getData={getData}></Search>
      <Results reslt={reslt}></Results>
    </div>
  );
}

export default App;