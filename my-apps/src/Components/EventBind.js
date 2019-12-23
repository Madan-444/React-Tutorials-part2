import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.goodbye=this.goodbye.bind(this)
    }
    goodbye(){
        this.setState({
            message:'Goodbye'
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                {/* <button onClick={this.goodbye.bind(this)}>Click here</button> */}
                {/* <button onClick={()=>this.goodbye()}>Click here</button> */}
                <button onClick={this.goodbye}>Click here</button>


            </div>
        )
    }
}

export default EventBind