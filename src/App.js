import React, {Component} from 'react'
import { Button } from '@material-ui/core'
import './App.css';

import Listy from './Listy'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nums: [],
      currNum: 0
    }
  }

  handleClick = event => {
    event.preventDefault()
    const newNums = [...this.state.nums, this.state.currNum]
    const newCurrNum = this.state.currNum + 1
    this.setState({
      nums: newNums,
      currNum: newCurrNum
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} color="primary" variant="contained">Click Me</Button>
        <Listy nums={this.state.nums}/>
      </div>
    );
  }
}

// function App() {  
//   return (
//     <Main />
//   );
// }

export default App;
