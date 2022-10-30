import React,{useCallback, useEffect, useState} from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { orange, yellow } from '@mui/material/colors';


export const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [menu, setMenu] = useState(false);
  const login = localStorage.getItem('login') || 'false';
  const userTheme = localStorage.getItem('theme');
  const [themeMod, setThemeMod] = useState('light');
  const language = localStorage.getItem('userLocale')||'en';
  const navigate = useNavigate();

  const getSearchParams = useCallback((value:string) => {
    setSearchParams({sort : value || ''});
  },[setSearchParams]); 

  const goProfile = useCallback(() => {
    navigate('/profile')
  },[navigate]);
 
  const goHome = useCallback(() => {
    navigate('/');
  },[navigate]);

  useEffect(() => {
    if(userTheme === 'dark'){
      document.documentElement.classList.add('dark');
    }
  },[userTheme]);

  const openMenu = useCallback(() => {
    if(menu){
      setMenu(false);
    }else{
      setMenu(true);
    }
  },[menu, setMenu])

  const logout = useCallback(() => {
    localStorage.setItem('login', JSON.stringify('false'));
    window.location.reload();
  },[])


  const changeLocalize = useCallback(() => {
    if(language === 'en'){
      localStorage.setItem('userLocale', 'ua');
    }else{
      localStorage.setItem('userLocale', 'en');
    }
    navigate(0);
  },[navigate]);

  const setTheme = useCallback(() => {
    if(themeMod === 'light'){
      localStorage.setItem('theme', 'dark');
      setThemeMod('dark');
      document.documentElement.classList.add('dark');
    }else if (themeMod === 'dark'){
      localStorage.setItem('theme', 'light');
      setThemeMod('light');
      document.documentElement.classList.remove('dark');
    }
  },[themeMod, setThemeMod]);
  
  if(login === 'false'){
    navigate('/register');
  }

  return (
    <div className='flex h-10 bg-[#6200ee] justify-between px-5 shadow-md items-center dark:bg-[#222222] dark:shadow-none'>
      <div className='flex'>
        <div>
          <button onClick={goHome} className='dark:text-white'>CocktailsDB</button>
        </div>
        <div>
          <input type="text" className='ml-5 rounded-lg' onChange={(e) => getSearchParams(e.target.value)} />
        </div>
      </div>
      <div className='flex space-x-6'>
        <div className='flex'>
          <input type="checkbox"  onChange={setTheme} className=" relative opacity-0 " id="checkbox"/>
          <label htmlFor="checkbox" className="w-14 h-7 bg-[#111] flex justify-between items-center rounded-[50px] p-1 ">
            <NightlightRoundIcon sx={{ color: yellow[500] }}/>
            <WbSunnyIcon sx={{ color: orange[500] }}/>
            <div id='ball' className='w-6 h-6  bg-white rounded-full absolute dark:translate-x-6'></div>
          </label>
        </div>
        <div >
          <button id='localize' onClick={changeLocalize} className='dark:text-white'>{language === 'en' ? 'EN':'UA'}</button>
        </div>
        <div className='flex mr-4'>
          <div className='box-border'>
            <button onClick={openMenu} className='dark:text-white'>Menu</button>
          </div>
          <div className=' absolute top-12 right-8'>
            {menu? <div className='h-20 w-20 bg-light flex flex-col items-center justify-center  rounded-md'>
              <ul>
                <li><button onClick={goProfile}>Profile</button></li>
                <li><button onClick={logout}>Log Out</button></li>
              </ul>
            </div>:null}
          </div>
        </div>
      </div>
    </div>
  );
};
