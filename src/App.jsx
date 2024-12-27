import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  async function getDta() {
    let local = await axios.get('https://jsonplaceholder.typicode.com/todos/');

    setData(local.data);
    console.log(local.data);
    
  }

  useEffect(()=>{
    getDta();
  },[])
  // useEffect(()=>{
  //   console.log(data);
    
  // },[data])

  return (
    <div>
      {data.map((ele,index)=>(
           <div key={index}>
            <ul>
              <li>{index}</li>
            </ul>
            <p>{ele.userId}</p>
            <p>{ele.id}</p>
            <p>{ele.title}</p>
          </div>
        ))
      }
    </div>


  )
}

export default App
