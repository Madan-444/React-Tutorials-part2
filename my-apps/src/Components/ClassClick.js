import React, {Component} from 'react'

class ClassClick extends Component {
    hitMe(){
        console.log('The class  button is clicked')
    }
    
    render(){
        return(
            <div>
               <button onClick={this.hitMe}>Click Class</button>
            </div>
        )
    }
}
export default ClassClick