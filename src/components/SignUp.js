import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
const [signUp, setSignUp] = useState({})
const navigate = useNavigate()

const submitSignUpForm = (event) => {
  event.preventDefault()

  fetch(`${process.env.REACT_APP_API_ENDPOINT}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signUp),
  })
}

  return (
    <div className="login">
      <form action="submit" onSubmit={submitSignUpForm} method='post'>
        <h2>Sign Up:</h2>
        <label htmlFor="">Email:</label>
        <input type="email" onChange={event => setSignUp({...signUp, email: event.target.value})} />
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" onChange={event => setSignUp({...signUp, password: event.target.value})} />
        <button type="submit" onClick={() => navigate('/admin')}>Sign Up</button>
      </form>
      <br />
      <h4>Already have an account?</h4>
      <button onClick={() => navigate('/login')}>Log In</button>
    </div>
  )
}

export default SignUp