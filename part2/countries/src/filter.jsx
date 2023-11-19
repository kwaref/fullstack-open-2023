import React from 'react'

export const Filter = ({value, handleChange}) => {
  return (
    <div>
        find countries: <input name='filter' value={value} onChange={handleChange} />
    </div>
  )
}
