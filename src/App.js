import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import Signup from './Pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Planform from './Pages/Planform';
import PaymentPicker from './Pages/PaymentPicker';
import Credit from './Pages/Credit';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signup/planform' element={<Planform/>}></Route>
          <Route path='/signup/paymentPicker' element={<PaymentPicker/>}></Route>
          <Route path='/signup/creditoption' element={<Credit/>}></Route>
        </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
