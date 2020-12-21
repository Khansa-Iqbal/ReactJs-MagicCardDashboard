import './App.css';
import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import CardList from './Components/CardList';
import {BrowserRouter, Route,Switch}  from "react-router-dom";
import DisplayCard from "./Components/DisplayCard";
import ThemeContext, {themes} from './Components/ThemeContext';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import {PageSizeFilterProvider, ColorFilterProvider, RarityFilterProvider, SuperTypeFilterProvider} from './Components/FilterContext';

function App() {

  const [theme, setTheme] = useState(themes.light);
  const toggleTheme =() =>
     theme === themes.dark? setTheme(themes.light): setTheme(themes.dark);
    
  return (
    <div style = {theme} className="App">
      <ThemeContext.Provider value={theme}>
      <BrowserRouter>
       <PageSizeFilterProvider> <ColorFilterProvider> <RarityFilterProvider> <SuperTypeFilterProvider>
      <NavBar/>
      <br/> <br/> <br/> <br/> <br/>
      <Toolbar style ={{"paddingLeft" : "45%"}}>
      <Button
        onClick ={toggleTheme}
        variant="contained"
        color="primary"
        startIcon={<AutorenewIcon />}
      >
        Switch theme
      </Button>
      </Toolbar>
      <Switch>
        <Route exact 
        path ="/" 
        render={(props) => <CardList {...props} />} />
        <Route
        path ="/:id" exact
         component={DisplayCard} />
      </Switch>
      </SuperTypeFilterProvider></RarityFilterProvider></ColorFilterProvider></PageSizeFilterProvider> 
      </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
