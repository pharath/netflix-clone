import React, { useState } from 'react';
import './Credit.css'
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

export default function Credit() {

const location = useLocation();
const {selectedCard,packagePrice,email} = location.state || {}; 

const [value, setValue] = useState('');
const [placeholder, setPlaceholder] = useState('Expiration date');


function proceedPayment(){ //register subscribe plan to user email
   let packageName=selectedCard;
    fetch(`http://localhost:8080/api/subscribe`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:email,
            plan:packageName
        })
    })
}


const handleFocus = () => {
    setPlaceholder('MM/YY');
};

const handleBlur = () => {
    setPlaceholder('Expiration date');
};

const handleChange = (e) => {
let inputValue = e.target.value.replace(/\D/g, ''); 

if (inputValue.length >= 2) {
    inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4);
}

setValue(inputValue);
};

const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && value.endsWith('/')) {
      e.preventDefault();
      setValue(value.slice(0, -1));
    }
};

const [cardNumber, setCardNumber] = useState('');

const handleCardNumberChange = (e) => {
  let formattedNumber = e.target.value.replace(/\D/g, '');

  if (formattedNumber.length > 4) {
    formattedNumber = formattedNumber.match(/.{1,4}/g).join(' ');
  }

  setCardNumber(formattedNumber);
};

const handleCardNumberKeyDown = (e) => {
  if (e.key === 'Backspace' && cardNumber.endsWith(' ')) {
    e.preventDefault();
    setCardNumber(cardNumber.slice(0, -1)); 
  }
};

const [cvv, setCvv] = useState('');

const handleCvvChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ''); 
    setCvv(inputValue);
};

  return (
    <div>
        <a href='/' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="body-container2">
            <div className="credit-container">
                <span>STEP <span className='bold'>3</span> OF <span className='bold'>3</span></span>
                <h2>Set up your credit or debit card</h2>
                <div className="payment-types-container">
                    <img src='/Assets/visa.png'></img>
                    <img src='/Assets/master.png'></img>
                    <img src='/Assets/amex.png'></img>
                </div>
                <Form>
                    <div className="input-sections">
                        <Form.Control className='credit-input' type="text" placeholder="Card number" value={cardNumber} onChange={handleCardNumberChange} onKeyDown={handleCardNumberKeyDown} maxLength="19"/>
                        <img className='input-icon' src='/Assets/input-cardno.png'></img>
                    </div>
                    <div className="input-sections2">
                        <Form.Control className='credit-input' type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} maxLength="5" />
                        <Form.Control className='credit-input' type="text" placeholder="CVV" value={cvv} onChange={handleCvvChange} maxLength="3"/>
                        <img className='input-icon-cvv' src='/Assets/input-cvv.png'></img>
                    </div>
                    <div className="input-sections">
                        <Form.Control className='credit-input' type="text" placeholder="Name on card" />
                    </div>
                </Form>
                <div className="package-info">
                    <p className='package-price'>USD <span>{packagePrice}</span>/month</p>
                    <p className='package-name'>{selectedCard}</p>
                    <a href='/signup/planform' className='package-change text-primary'>Change</a>
                </div>
                <p className='payment-terms'>By checking the checkbox below, you agree to our <span className='text-primary'>Terms of Use</span> , <span className='text-primary'>Privacy Statement</span>, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently USD <span>{packagePrice}</span>/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
                <div className="check-box">
                    <Form.Check className='ch-box' aria-label="option 1" />&nbsp; I agree.
                </div>
                <br></br>
                <Button onClick={proceedPayment} variant="danger" className='btn-4'>Start Membership</Button><br></br>
                <p className='payment-terms'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-primary'>Learn more</span> .</p>
                <br></br><br></br><br></br>
            </div>
        </div>
        <Globalfooter/>
    </div>
  )
}
