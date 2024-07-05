import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import Signup from './Pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Planform from './Pages/Planform';
import PaymentPicker from './Pages/PaymentPicker';
import Credit from './Pages/Credit';
import Login from './Pages/Login';
import ScrollTop from './Pages/ScrollTop';
import Registration from './Pages/Registration';
import Regform from './Pages/Regform';
import Planwelcome from './Pages/Planwelcome';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollTop/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signup/planform' element={<Planform/>}></Route>
          <Route path='/signup/paymentPicker' element={<PaymentPicker/>}></Route>
          <Route path='/signup/creditoption' element={<Credit/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/signup/regform' element={<Regform/>}></Route>
          <Route path='/signup/plan' element={<Planwelcome/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
