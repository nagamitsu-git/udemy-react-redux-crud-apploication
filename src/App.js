import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const greeting = "Hi, Nagamitsu!"
//     const dom = <h1 className="foo">{greeting}</h1>
//     return dom;
//   }
// }

// class App extends Component {
//   render() {
//     return <input type="text" onClick={()=>{console.log("I am Cliked")}}/>;
//   }
// }

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={()=>{console.log("I am Cliked")}}/>
      </React.Fragment>
    ) 
   
  }
}
export default App;
