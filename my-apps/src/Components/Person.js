import React from 'react'

function Person({persons}) {
    return (
        <div>
            <h2>
                I am {persons.name}. I am {persons.age} years old and i have {persons.skill} 
            </h2>

        </div>
    )
}

export default Person
