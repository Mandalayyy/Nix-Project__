import React,{useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalized } from '../../services/localized';



export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 
  const setData = useCallback(() => {
    if(!name || !email || !password || !phone){
      alert('Error');
    }else{
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('password', JSON.stringify(password));
      localStorage.setItem('phone', JSON.stringify(phone));
      localStorage.setItem('name', JSON.stringify(name));
      navigate('/login');
    }
  },[name, phone, password, email, navigate]);
  const Loging = useCallback(() => {
    navigate('/login');
  },[navigate]);
  return(
    <div className='flex justify-center h-screen items-center  dark:bg-[#121212]'>
      <div className='flex justify-center  rounded-md h-[600px] w-[600px] shadow-md bg-slate-100  dark:bg-[#1e1e1e] ' >
        <form onSubmit={setData} className='flex flex-col justify-around w-3/4' action="">
          <h3 className='text-xl font-bold text-center uppercase dark:text-white'>{getLocalized('registerAccount')}</h3>
          <div className='flex gap-y-8 flex-col'>
            <div className="">
              <input
                type="text"
                className="ml-3 w-full p-2 rounded-md "
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="">
              <input
                type="email"
                className="ml-3 w-full p-2 rounded-md"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="">
              <input
                type="password"
                className="ml-3 w-full p-2 rounded-md"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className=" ">
              <input
                type="Phone"
                className="ml-3 w-full p-2 rounded-md"
                placeholder="Enter contact number"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="px-3 py-1 bg-blue-500  rounded-lg uppercase">
                {getLocalized('registerButton')}
              </button>
            </div>
          </div>
          
        
          <p onClick={Loging} className="flex justify-center dark:text-white">{getLocalized('alreadyRegister')} {<span className= 'pl-1 text-blue-500 cursor-pointer'>{getLocalized('loginPage')}</span>}</p>
        </form>
      </div>
      
    </div>
  );
};
