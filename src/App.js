import React, { Component } from 'react'
import './styles/App.css';

 class App extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: ''
         }
     }
     handalClick = (e) => {
        this.setState({
            name: "Narendra"
        })
     }
     
    render() {
        return (
            <div>

                <h1>This is My React Component!!!</h1>
                <button onClick={this.handalClick}>Click Me</button>
                {this.state.name && <h2>{this.state.name}</h2>}
            </div>
        )
    }
}

export default App
