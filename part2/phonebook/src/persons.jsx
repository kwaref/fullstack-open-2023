import React from 'react'

export const Person = ({person}) => <p>{`${person.name} ${person.number }`}</p>

export const PersonList = ({persons, filter}) => {
    return (<>
        {persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase())).map(person =><Person key={person.id} person={person}/>) }
    </>)
}
