import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div >
      <label htmlFor={field.name}>{label}:</label><br/>
      <input
       className='input2'
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

export default TextField;