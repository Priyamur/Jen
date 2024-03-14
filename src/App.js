import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [emailerror,setEmailError] =useState();
  const [passworderror,setPasswordError] =useState();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email  && !loginData.password )
    {
      setEmailError("Fields cannot be empty")
    }
    else if (!loginData.email)
    {
      setEmailError("Email cannot be empty")
    }
    else if (!loginData.password )
    {
      setPasswordError("Password cannot be empty")
    }

  };
  return (
    <div className="App">
      <div className="login">
      <label for="chk" className='log' data-testid="logg" aria-hidden="true">Login</label>
        {emailerror && <p data-testid="email_error" className='error'>{emailerror}</p>}
        {passworderror && <p data-testid = "password_error" className='error'>{passworderror}</p>}
        <form onSubmit={handleLoginSubmit}>
          
          <input type="email" data-testid="email_1" name="email" placeholder="Email" value={loginData.email} onChange={handleChange}/>
          <input type="password" data-testid="pass_1" name="password" placeholder="Password" value={loginData.password} onChange={handleChange}/>
          <button type="submit" data-testid="loginbutton">Login</button>
        </form>
      </div>
    </div>
  );
}
export default App;
