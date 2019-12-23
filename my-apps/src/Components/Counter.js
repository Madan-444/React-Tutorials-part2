import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:0
        }
    }
    increment(){
        this.setState({
            message:this.state.message +=1

        })
        let person={
            name:'Madan',
            address:'Thimi',
            age:'22'
        }
        // console.log(person.name)
        // console.log(person.address)
        // console.log(person.age)
        const {name,address,age} = person;
        console.log(person)
        console.log(this.state.message)
    }
    Increment5(){
        this.increment();
        this.increment();
        this.increment();
    }
    
    render() {
        return (
            <div>
            <h2>{this.state.message}</h2>
            <button onClick={()=>this.Increment5()}>Increment</button>
                
            </div>
        )
    }
}

export default Counter
