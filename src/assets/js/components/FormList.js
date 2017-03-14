import React from 'react'

export default (props) => {
  return (
    <div>
      {props.fields.map((field, index) => {
        const Field = field.component

        return <Field key={field.id} />
      })}
    </div>
  )
}
