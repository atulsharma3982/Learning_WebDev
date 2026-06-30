import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import getData from './data.js'

function App() {
  const [data, setData] = useState([])

  const dataFetched = async () => {
    let data = await getData();
    console.log(data)
    setData(data)
    // return data;
  }

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts/')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setData(json);
    //   });
    
    dataFetched();
  },[])

  return (
    <>
      <Navbar/>
      <div className="container m-auto bg-amber-600 h-fill w-screen py-2 flex gap-4 flex-wrap justify-center">
        {
          data.map((data1) => {
            return (<Card key={data1.id} dataa={data1} />)
          })
        }
      </div>
    </>
  )
}

export default App
