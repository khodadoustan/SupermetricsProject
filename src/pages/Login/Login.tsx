import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../../components/TextField/TextField';
import { register } from '../../services/webservices';
import LoginReq from '../../types/Login';

function Login() {
  const [loginObject, setLoginObject] = useState<LoginReq>({
    name: null,
    email: null,
  });

  const [errors, setErrors] = useState<LoginReq>({
    name: null,
    email: null,
  });

  let navigate = useNavigate();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ name: null, email: null });
    let tempObject = loginObject;
    setLoginObject({ ...tempObject, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    let tempErrors = errors;

    if (!loginObject.name) {
      tempErrors.name = 'Name is required.';
    }

    if (loginObject.email) {
      var emailFilter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!emailFilter.test(loginObject.email)) {
        errors.email = 'Invalid email.';
      }
    } else {
      errors.email = 'Email is required.';
    }

    if (tempErrors.name || tempErrors.email) {
      setErrors({ ...tempErrors });
      return;
    }
    const resp = await register(loginObject);
    if (resp.data.sl_token) {
      localStorage.setItem('token', resp.data.sl_token);
      navigate('/');
    }
  };

  return (
    <div className='LoginRoot'>
      <div className='LoginContainer'>
        <h1>Login</h1>
        <TextField
          name='name'
          onChange={onChangeValue}
          title='Name'
          error={errors.name}
        />
        <TextField
          name='email'
          onChange={onChangeValue}
          title='Email'
          error={errors.email}
        />
        <div className='LoginButton'>
          <button type='submit' onClick={() => handleLogin()}>
            GO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
