//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBarComponent';
import React, { useState, useEffect, useCallback } from 'react';
import SmoothScroll from 'smooth-scroll';

function App() {
  
  new SmoothScroll('a[href*="#"]');

  //##### SCROLL TO TOP BUTTON #####
  const [scrolledTop, setScrolledTop] = useState(0);

  const toggleTopButton = useCallback(() => {
    if (scrolledTop === 0 && window.scrollY > 100) { //Sets states scrolledTop value to 1 if page pos is greater than 100 (not at top of page)
      setScrolledTop(1);
      console.log(`scrolled down: ${scrolledTop} | ${window.scrollY}`);
      window.removeEventListener('scroll',toggleTopButton,true);
    }
    else if (scrolledTop === 1 && window.scrollY < 100) { //Sets states scrolledTop value to 0 if page pos is less than 100 (is at top of page)
      setScrolledTop(0);              //(scrolledTop controls the opacity of the scroll to top button. When at top of page
      console.log(`scrolled up: ${scrolledTop} | ${window.scrollY}`);
      window.removeEventListener('scroll',toggleTopButton,true);
    }
    //the value is 0 (hidden) and 1 (visible) when not at top of page)
    //========================================================
  },[scrolledTop,setScrolledTop]);

  //====== Manages state for scroll to top button ======
  useEffect(() => {                                      //adds event listener and sets state currentPos to page current scroll position
    window.addEventListener('scroll', toggleTopButton, true);
    return () => {
      window.removeEventListener('scroll', toggleTopButton,true);
    }
  }, [toggleTopButton]);
  //################################

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/store'>
          <Store />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      <div className='toTop'
        style={{ ...style.topButton, opacity: scrolledTop }}>
        <a href='#top' >
          <i className="fa fa-chevron-up fa-1x insta" style={style.buttonIcon}></i>
        </a>
      </div>
    </div>
  );
}

const style = {
  topButton: {
    backgroundColor: 'white',
    height: '2rem',
    width: '2rem',
    position: 'fixed',
    bottom: '1.5rem',
    right: '1rem',
    borderRadius: '2rem',
    boxShadow: ' 0px 0px 9px 0px rgba(1,1,1,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    // border: '2px solid white'
  },
  buttonIcon: {
    color: 'black',
    position: 'absolute',
    top: "calc(50% - 8px)",
    right: "calc(50% - 8px)"
  }
};

export default App;
