import React from 'react'

export const Person = ({person, handleDelete}) => <p>{`${person.name} ${person.number }`} <button onClick={()=>handleDelete(person.id)}>delete</button></p>

export const PersonList = ({persons, filter, handleDelete}) => {
    return (<>
        {persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase())).map(person =><Person key={person.id} person={person} handleDelete={handleDelete}/>) }
    </>)
}
