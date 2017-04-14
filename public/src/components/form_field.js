import React from 'react';

const FormField = ({ input, label, type, meta: { touched, error, warning } }) => {
  let classNames = ["form-group"];
  if (error && touched) {
    classNames.push("has-error");
  }

  return (
    <div className={classNames.join(" ")}>
      {label ? <label>{label}</label> : ''}
      <input {...input} type={type} className="form-control" />
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  );
};

export default FormField;
