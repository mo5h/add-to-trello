import React from 'react'

export default (props) => {
  return (
    <div>
      {props.fields.map((field) => {
        console.log(field)
      })}
    </div>
  )
}
