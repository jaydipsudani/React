// // import React, { useState } from 'react';

// // const CurrencyConverter = () => {
// //   const [amount, setAmount] = useState('');
// //   const [fromCurrency, setFromCurrency] = useState('USD');
// //   const [toCurrency, setToCurrency] = useState('EUR');
  
// //   const convertCurrency = () => {
// //     // Here you can implement the logic to fetch current exchange rates and perform the conversion
// //     // For simplicity, we'll just multiply the amount by a fixed conversion rate
// //     const conversionRate = 0.85; // Example: 1 USD = 0.85 EUR
// //     const convertedAmount = amount * conversionRate;
    
// //     alert(`${amount} ${fromCurrency} equals ${convertedAmount} ${toCurrency}`);
// //   }
  
// //   return (
    

      
// //  setAmount(e.target.value)} />
      
    

// //   );
// // }

// // export default CurrencyConverter;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CurrencyConverter = () => {
//   const [amount, setAmount] = useState();
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [convertedAmount, setConvertedAmount] = useState();

//   useEffect(() => {
//     fetchExchangeRate();
//   }, []);

//   const fetchExchangeRate = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' with your actual API key from a currency exchange rate provider
//       const apiKey = 'YOUR_API_KEY'; 
//       const response = await axios.get(`https://api.currency.com/exchange-rate?apiKey=${apiKey}&from=${fromCurrency}&to=${toCurrency}`);
      
//       if (response.data.success) {
//         setExchangeRate(response.data.rate);
//       } else {
//         console.error('Failed to fetch exchange rates');
//       }
//     } catch (error) {
//       console.error('Error fetching exchange rates', error);
//     }
//   };

//   const convertCurrency = () => {
//     if (!exchangeRate) return;

//     // Perform the conversion based on the fetched exchange rate
//     const convertedValue = amount * exchangeRate;
    
//     // Update state with the converted amount
//     setConvertedAmount(convertedValue);
    
//      alert(`${amount} ${fromCurrency} equals ${convertedValue} ${toCurrency}`);
  
// };

// return (
 

 
//  setAmount(e.target.value)} />
 
// USD

// onChange= {(e)=>setToCurency(e.target.value)}
//  USD
//  EUR 

//  Convert 

// );



// export default CurrencyConverter;