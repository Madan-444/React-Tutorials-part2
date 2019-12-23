import React, { Component } from 'react'

class LifecycleMethods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:'red'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:'Yellow'})
        },5000)
    }
    
    render() {
        return (
            <div>
            <h2>{this.state.color} is my favorite color</h2>
                
            </div>
        )
    }
}

export default LifecycleMethods
