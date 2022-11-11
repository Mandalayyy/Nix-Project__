import React from "react";
import { CocktailsListPage } from "../CocktailsList/CocktailsList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./navbar";
import { CocktailIngridient } from "../CocktailsList/CocktailIngridient";
import { RegisterPage } from "../Autorization/RegisterPage";
import { LoginPage } from "../Autorization/LoginPage";
import { ProfilePage } from "../Autorization/ProfilePage";
import { OwnCocktailsList } from "../OwnCocktail/OwnCocktailsList";
import { ModalForm } from "../ModalForm/modalForm";
import { AllIngridientsPage } from "../CocktailsList/AllIngridietns";
import { Footer } from "./footer";

export const DashboardPage = () => {
  
  return (
    <Router>
      <NavBar />
      <div id="routes" className="font-font min-h-screen bg-gray-100 flex flex-wrap justify-center pb-10 dark:bg-[#121212]">
        <Routes>
          <Route path='profile' element={< ProfilePage />} />
          <Route path='register' element={<RegisterPage />}/>
          <Route path='login' element={<LoginPage />} />
          <Route path='/' element={<CocktailsListPage />} />
          <Route path='cocktail/:id' element={<CocktailIngridient />} />
          <Route path="ing/:Name" element={<AllIngridientsPage/>} />
          <Route path='allIgr' element={<AllIngridientsPage/>} />
          <Route path="ownCocktails" element={<OwnCocktailsList/>}>
            <Route path="modalForm" element={<ModalForm/>}/>
          </Route>
        </Routes>
      </div>
      <Footer />
      
      
    </Router>
  );
};