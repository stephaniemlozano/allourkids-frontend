import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [loginForm, setLoginForm] = useState({})
  const navigate = useNavigate()
  
  const formSubmit = (event) => {
    event.preventDefault()
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginForm),
    })
    .then(response => response.json())
    .then(data => {
    localStorage.setItem('userToken', data.accessToken)
      navigate('/admin')
    })
    .catch(error => console.error(error))
  }
  
  return (
    <div className="login-form">
      <form action="submit" onSubmit={formSubmit} method='post'>
        <h2>Log In</h2>
        <label htmlFor="">Email:</label>
        <input type="email" onChange={event => setLoginForm({...loginForm, email: event.target.value})} />
        <label htmlFor="">Password:</label>
        <input type="password" onChange={event => setLoginForm({...loginForm, password: event.target.value})} />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login