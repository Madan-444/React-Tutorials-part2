import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        
        return this.state.isLoggedIn &&<div>Welcome Magar</div>
        // return(
        // this.state.isLoggedIn?
        // <div>Welcome Madan</div> :
        // <div>Welcome guest</div>
        // )
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Madan</div>
        // }else{
        //     message= <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Wlcome Madan</div>
        //     )
        // }else{
        //     return(
        //         <div>welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Madan</div>
        //         <div>Welcome Guest</div>

        //     </div>
        // )
    }
}

export default UserGreeting
