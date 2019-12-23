import React from 'react'
import Person from './Person'

function NameList() {
    const names = [
        {
            name:'Bruce',
            age:'22',
            skill:'Python'
        },
        {
            name:'Clarkk',
            age:'44',
            skill:'Javascript'
        },
        {
            name:'Diana',
            age:'33',
            skill:'Machine learning'
        },
        {
            name:'Madan',
            age:'23',
            skill:'React Js'
        }
    ]
    const newList =  names.map(persons=>(<Person persons={persons}  />))
    return (
        <div>
        {/* <h1>{names[0]}</h1>
        <h2>{names[1]}</h2>
        <h3>{names[2]}</h3> */}
        {
            newList 
            
           
        }
            
        </div>
    )
}

export default NameList
