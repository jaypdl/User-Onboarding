import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import UserForm from './Form';
import DisplayUsers from './DisplayUsers';
import schema from './Schema';
import * as yup from 'yup';


function App() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    tos: false,
  }

  const initialDisabled = true

  const [formValues, setFormValues] = useState(initialValues)
  const [userList, setUserList] = useState([])
  const [buttonDisabled, setButtonDisabled] = useState(initialDisabled)

  const updateForm = (name, inputValue) => {
    setFormValues({...formValues, [name]:inputValue})
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    }
    setUserList([...userList, newUser])
    setFormValues(initialValues)
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setButtonDisabled(!valid);
      })
  },[formValues])



  return (
    <div className="App">
      <h1>Super Duper Onboarding App</h1>
      <div>
      <h2>Add User</h2>
      <UserForm formValues={formValues} updateForm={updateForm} submit={formSubmit} buttonDisabled={buttonDisabled} />
      </div>
      <div>
        <div><h2>---------------------------</h2></div>
        <h2>Current Users</h2>
        <div><h2>---------------------------</h2></div>
        {userList.map( user => {
          return(
            <DisplayUsers user={user}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
