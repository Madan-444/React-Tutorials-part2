import React from 'react'

function Child(props) {
    return (
        <div>
        <button onClick={()=> props.helloHandler('Child Child')}>Click Me</button>
            
        </div>
    )
}

export default Child
