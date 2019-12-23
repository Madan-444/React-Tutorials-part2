import React, {Component} from 'react'
function EventHandler(){
     function ClickButton(){
        console.log('The button is clicked')
    }
    return(
        <div>
           <button onClick ={ClickButton}>Click</button>
        </div>

    )
}
export default EventHandler