import axios from 'axios'

export const LoginAPI = (payload : object) => {
  return axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', payload);
}

export const signupAPI = (payload : object) => {
  return axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration' , payload); 
}

export const forgotpasswordAPI = (payload : object) => {
  return axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/verification/${payload}`, payload);
}