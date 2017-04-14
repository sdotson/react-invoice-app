import React from 'react';

const FormField = ({ input, label, type, meta: { touched, error, warning } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} className="form-control" />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  );
};

export default FormField;
