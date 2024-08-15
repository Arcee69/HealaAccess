import React, { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Auth from '../pages/Auth';
import Success from '../pages/Success';


const Routers = () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
  return (
    <Routes>
      <Route exact path='/:id' element={<Auth />} />
      <Route exact path='/success' element={<Success />} />
    </Routes>
  )
}

export default Routers