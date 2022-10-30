import React, { useCallback, useState } from 'react';

export const ProfilePage = () => {
  const [isItemsChanged, setItemsChanging] = useState(false);
  const [name, setName] = useState( JSON.parse(localStorage.getItem('name')|| ''));
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem('email')|| ''));
  const [password, setPassword] = useState(JSON.parse(localStorage.getItem('password')|| ''));
  const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('phone')|| ''));


  const setData = useCallback(() => {
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));
    localStorage.setItem('phone', JSON.stringify(phone));
    localStorage.setItem('name', JSON.stringify(name));
  },[name, phone, password, email]);

  const onCloseClick = useCallback(() => {
    setItemsChanging(false);
  },[isItemsChanged]);

  
  const changeItems = useCallback(() => {
    setItemsChanging(true);
  },[isItemsChanged]);
  return(
    <div className='h-screen dark:bg-[#121212] flex dark:text-white flex-col items-center pt-10  '>
      <div className='flex flex-col w-full mt-12 '>
        <div className='flex justify-center'>
          <span >User:  </span>{name}
        </div>
        <div className=' items-start ml-20 space-y-4'>
          <div className=' '> 
            <span className='font-bold  mr-2'>Name:  </span>{isItemsChanged? 
              <input 
                type="text" 
                className='dark:text-black border rounded-md pl-2 shadow-sm'
                value={name} 
                onChange={(event) => setName(event.target.value)}/>: 
              name}
          </div>
          <div>
            <span className='font-bold  mr-2' >Email:  </span>{isItemsChanged? 
              <input 
                type="text" 
                className='dark:text-black border rounded-md pl-2 shadow-sm'
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>: 
              email}
          </div>
          <div>
            <span className='font-bold  mr-2'>Password:</span>{isItemsChanged? 
              <input 
                type="text" 
                className='dark:text-black border rounded-md pl-2 shadow-sm'
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>: 
              password}
          </div>
          <div>
            <span className='font-bold mr-2'>Phone:  </span>{isItemsChanged? 
              <input 
                type="text" 
                className='dark:text-black border rounded-md pl-2 shadow-sm'
                value={phone}
                onChange={(event) => setPhone(event.target.value)} />: 
              phone}
          </div>
        </div>
       
      </div>
      <div className='flex w-full justify-center mt-12'>
        {isItemsChanged ? <div className='flex items-center '>
          <div>
            <button className='mr-5' onClick={setData}>Save</button>
          </div>
          <div>
            <button onClick={onCloseClick}>Close</button>
          </div>
        </div>: <button onClick={changeItems}>Change Account info!</button>}
      </div>
    </div>
  );
}