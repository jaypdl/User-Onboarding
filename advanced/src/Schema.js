import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string()
    .required('Name required'),
  email: yup.string()
    .required('Email required'),
  password: yup.string()
    .required('Password required')
    .min(3, 'Pass must be at least 4 chars'),
  tos: yup.boolean()
    .required('I require your soul'),
  
})