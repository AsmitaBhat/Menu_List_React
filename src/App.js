import React from 'react';
import './App.css';
import data from "./menuData.js"

class App extends React.Component {

  appear(){
    return <div>Hello</div>
  }
  render() {
    return (
      <div className="App">
        <div className="Row">
         <ul className="List">
           {
             data.map(function (obj)
             {
               return <li onmouseover={()=>this.appear()} onmouseout={()=>this.hide()}>{obj.name}</li>
             })
           }
         </ul>
        </div>
      </div>
    );
  }
}

export default App;
