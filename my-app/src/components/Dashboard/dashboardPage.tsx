import React, { useMemo } from "react";
import { CocktailsListPage } from "../CocktailsList/CocktailsList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./navbar";
import { CocktailIngridient } from "../CocktailsList/CocktailIngridient";
import { RegisterPage } from "../Autorization/RegisterPage";
import { LoginPage } from "../Autorization/LoginPage";
import { ProfilePage } from "../Autorization/ProfilePage";

export const DashboardPage = () => {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='profile' element={< ProfilePage />} />
        <Route path='register' element={<RegisterPage />}/>
        <Route path='login' element={<LoginPage />} />
        <Route path='/' element={<CocktailsListPage />} />
        <Route path='cocktail/:id' element={<CocktailIngridient />} />
      </Routes>
    </Router>
  );
};