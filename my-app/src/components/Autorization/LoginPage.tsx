import React, {useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalized } from '../../services/localized';




export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const storageLogin = localStorage.getItem('login') || 'false';
  const stEmail = localStorage.getItem('email') || '';
  const stPassword = localStorage.getItem('password') || '';

  const setData = useCallback(() => {
    if(email != JSON.parse(stEmail)  || password !=JSON.parse(stPassword) ){
      alert('Error');
    }else{
      setLogin(true);
      localStorage.setItem('login', JSON.stringify(login));
    }
    if(storageLogin && login){
      navigate('/');
    }
  },[password, email, login, navigate]);
  return(
    <div className='flex justify-center h-screen items-center  dark:bg-[#121212]'>
      <div className='flex justify-center  rounded-md h-[400px] w-[400px] shadow-md bg-slate-100  dark:bg-[#1e1e1e] '>
        <form onSubmit={setData} className='flex flex-col justify-around w-3/4' action="">
          <h3 className='text-xl font-bold text-center uppercase dark:text-white'>{getLocalized('loginPage')}</h3>
          <div className='flex gap-y-8 flex-col'>
            <div className="form-group">
              <input
                type="email"
                className="ml-3 w-full p-2 rounded-md disabled:bg-black"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="ml-3 w-full p-2 rounded-md"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <button onClick={setData} type="submit" className="px-3 py-1 bg-blue-500  rounded-lg uppercase">
            {getLocalized('login')}
          </button>
        </form>
      </div>
      
    </div>
  );
 
};