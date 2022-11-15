
import React,{ChangeEvent, FormEvent, useCallback, useEffect, useState} from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import { orange, yellow } from '@mui/material/colors';
import {DebounceInput} from 'react-debounce-input';


export const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const routes = document.getElementById('routes');
  const [menu, setMenu] = useState(false);
  const [bMenu, setBMenu] = useState(false);
  const login = localStorage.getItem('login') || 'false';
  const userTheme = localStorage.getItem('theme');
  const [themeMod, setThemeMod] = useState('light');
  const language = localStorage.getItem('userLocale')||'en';
  const navigate = useNavigate();

  const getSearchParams = useCallback((value:string | null) => {
    setSearchParams({sort : value || ''});
  },[setSearchParams]); 

  const goProfile = useCallback(() => {
    navigate('/profile');
    setMenu(false)
  },[navigate, menu]);
 
  const goHome = useCallback(() => {
    navigate('/');
  },[navigate]);

  useEffect(() => {
    if(userTheme === 'dark'){
      document.documentElement.classList.add('dark');
    }
    if(login != 'true'){
      navigate('/register');
    }
  },[userTheme, login]);

  const openBMenu = useCallback(() => {
    if(bMenu){
      setBMenu(false);
      if(routes){
        routes.classList.remove('pl-[250px]','duration-150', 'ease-in-out');
      }
      
    }else{
      setBMenu(true);
      if(routes){
        routes.classList.add('pl-[250px]','duration-150','ease-in-out');
      }
    }
  },[bMenu, setBMenu, routes]);

  const openMenu = useCallback(() => {
    if(menu){
      setMenu(false);
    }else{
      setMenu(true);
    }
  },[menu]);

  const logout = useCallback(() => {
    localStorage.setItem('login', JSON.stringify('false'));
    window.location.reload();
  },[]);


  const changeLocalizeToUa = useCallback(() => {
    localStorage.setItem('userLocale', 'ua');
    document.getElementById('en')?.classList.remove('underline');
    document.getElementById('ua')?.classList.add('underline');
    navigate(0);
  },[navigate]);
  const changeLocalizeToEn = useCallback(() => {
    localStorage.setItem('userLocale', 'en');
    document.getElementById('ua')?.classList.remove('underline');
    document.getElementById('en')?.classList.add('underline');
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

  const goToMainPage = useCallback(() => {
    openBMenu();
    navigate('/');
  
  },[navigate, bMenu]);

  const eventListener = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => getSearchParams(e.target.value);

  const goToOwnCocktails = useCallback(() => {
    openBMenu();
    navigate('ownCocktails');
    
  },[navigate, bMenu]);
  
  return (
    <div className='flex h-10 w-screen text-black bg-[#443aff] justify-between px-10 shadow-md items-center dark:bg-[#222222] dark:shadow-none'>
      <div className='flex'>
        <div className='flex mr-5'>
          <button onClick={openBMenu}><MenuIcon className='dark:text-white' /></button>
        </div>
        {bMenu? <div className='flex w-[250px] h-[250px] items-start  flex-col absolute top-10 left-0 dark dark:bg-[#222222] shadow-md rounded-br dark:text-white'>
          <button className='p-5' onClick={goToMainPage}>Home</button>
          <button className='p-5 ' onClick={goToOwnCocktails}>OwnCocktails</button>
        </div>: null}
        <div>
          <button onClick={goHome} className='dark:text-white'>CocktailsDB</button>
        </div>
        <div>
          <DebounceInput 
            debounceTimeout={300}
            onChange={eventListener}
            className='ml-5 rounded-lg'
          />
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
          <button id='en' onClick={changeLocalizeToEn} className='dark:text-white pr-1'>{language === 'en' ? <span className='underline'>EN</span>: <span>EN</span>}</button>
          <span className='dark:text-white'>|</span>
          <button id='ua' onClick={changeLocalizeToUa} className='dark:text-white pl-1'>{language === 'ua' ? <span className='underline'>UA</span>: <span>UA</span>}</button>
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
