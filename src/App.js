//import React, { Component } from 'react';
import React from 'react';
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

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=>{console.log("I am Cliked")}}/>
//       </React.Fragment>
//     ) 
   
//   }
// }

const App = ()=>{
  const profiles=[
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName"}
  ]
  return (
        <div>
          {
            profiles.map((profile, index)=>{
            return <User name={profile.name} age={profile.age} key={index}/>
            })
          }
         </div>
  ) 
}

const User =(props) =>{
  return <div>Hi, Iam {props.name} and {props.age} years old</div>
}

User.defaultProps ={
  age:1
}
export default App;
