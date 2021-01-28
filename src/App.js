import React, {useEffect, useState} from 'react'
import './App.css';
import './components/Header'
import './components/Footer'
import Layout from './components/Layout'
import axios from 'axios'

function App() {

  const [counter, setCounter] = useState(0)
  const [date, setData] = useState('')

  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  myChangeHandler = (event) => {
    this.setState({value: event.target.value});
  }

  /*useEffect(() => {
    axios
      .get('https://newapi.citiboard.se/cb/annonslista')
      .then(respons => {
        console.log(response)
      })
  })*/

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
        <br/>
        <form>
          <label>Value to add or subtract</label>
          <input type="text" onChange={this.myChangeHandler}/>
          <button type="submit" onClick={(() => add(this))}>Add</button>
          <button type="submit" onClick={(() => minus(this))}>Subract</button>
        </form>

    </div>
    </Layout>
  );
}

export default App;
