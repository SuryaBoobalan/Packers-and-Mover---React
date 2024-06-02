import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Component/LandingPage/Welcome';
import Estimate from './Component/Quotation/Estimate';
import Header from './Component/LandingPage/Header';
import Estimation from './Component/Quotation/Estimation';
import ItemList from './Component/Select-Item/ItemList';
import Items from './Component/FinalItems/Items';
import Origin from './Component/OriginPage/Origin';
import Destination from './Component/Destination/Destination';
import Calculate from './Component/Calculation/Calculate';
import Panel from './Component/Admin/Panel';
import AdminLogin from './Component/Admin/AdminLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Welcome />}/>
        <Route exact path="/Estimation" element={<Estimation />}/>
        <Route exact path="/ItemList" element={<ItemList />}/>
        <Route exact path="/Items" element={<Items />}/>
        <Route exact path="/Origin" element={<Origin />}/>
        <Route exact path="/Destination" element={<Destination />}/>
        <Route exact path="/Calculate" element={<Calculate />}/>
        <Route exact path="/Panel" element={<Panel />}/>
        <Route exact path="/Admin" element={<AdminLogin />}/>
       

      </Routes>
      </BrowserRouter>
     

     
      
    
    </div>
  );
}

export default App;
