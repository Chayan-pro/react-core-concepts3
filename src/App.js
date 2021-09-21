import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadCommnet></LoadCommnet>
    </div>
  );
}
function LoadCommnet (){
  const [commnets, setCommnet ]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> setCommnet(data))
  },[])
  return(
    <div>
      <h3>Load comment</h3>
      {
        commnets.map(commnet => <Commnet title={commnet.title} body={commnet.body}></Commnet>)
      }
    </div>
  )
}
function Commnet (props){
  return(
    <div style={{background:'lightpink', margin: '20px', borderRadius:'10px', padding:'15px'}}>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  const handIncrease =()=>setCount(count+1);
  const handDecrease =()=>setCount(count-1);
  return(
    <div>
      <h2>Count:{count} </h2>
      <button onClick={handIncrease}>Increase</button>
      <button onClick={handDecrease}>Decrease</button>
    </div>
  );
}

export default App;
