import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parenMessage:'Madan'
        }
        this.hello = this.hello.bind(this)
    }
    hello(childName){
        alert(`Hello ${this.state.parenMessage} from ${childName}`)
    }
    
    render() {
        return (
            <div>
            <Child helloHandler={this.hello}/>
                
            </div>
        )
    }
}

export default Parent
