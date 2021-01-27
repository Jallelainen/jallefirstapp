import React, {useEffect, useState} from 'react'
import './App.css';
import './components/Header'
import './components/Footer'
import Layout from './components/Layout'
import axios from 'axios'

function App() {

  const [counter, setCounter] = useState(0)
  const [date, setData] = useState('')

  useEffect(() => {
    axios
      .get('https://newapi.citiboard.se/cb/annonslista')
      .then(respons => {
        console.log(response)
      })
  })

  const add = (props) => { // function
    setCounter(prevState => prevState + props)
  }

  const minus = () => {
    setCounter(prevState => prevState - 1)
  }

  return (
    <Layout>
      <div className="App">

        <h2>Counter:</h2>
        <h4>{counter}</h4>
        <button onClick={(() => add(1))}>Add</button>
        <button onClick={(() => minus())}>Subract</button>

    </div>
    </Layout>
  );
}

export default App;
