import React from "react";

export default function UserForm(props) {
  const { formValues, updateForm, submit, buttonDisabled } = props

  const onChange = event => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    updateForm(name, valueToUse);

  }
  const onSubmit = event => {
    event.preventDefault();
    submit();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name 
          <input
          type='text'
          name='name'
          placeholder="Enter Name"
          onChange={onChange}
          value={formValues.name}
          />
        </label>
        <br/>
        <label>
          Email 
          <input
          type='email'
          name='email'
          placeholder="Enter Email Addess"
          onChange={onChange}
          value={formValues.email}
          />
        </label>
          <br/>
        <label>
          Password 
          <input
          type='password'
          name='password'
          placeholder="Enter Password"
          onChange={onChange}
          value={formValues.password}
          />
        </label>
          <br/>
        <label>
          Terms of Service 
          <input
          type="checkbox"
          name="tos"
          onChange={onChange}
          checked={formValues.tos}
          />
        </label>
          <br/>
        <button disabled={buttonDisabled}>Submit</button>
      </form>
    </div>
  );
}
