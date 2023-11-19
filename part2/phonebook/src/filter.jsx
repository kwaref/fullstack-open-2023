import React from 'react'

export const Filter = ({value, handleChange}) => {
  return (
    <div>
        filter shown with: <input name='filter' value={value} onChange={handleChange} />
    </div>
  )
}
