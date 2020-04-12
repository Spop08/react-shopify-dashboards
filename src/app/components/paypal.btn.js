import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

//PayPal Express button
const PayPalButton = ({ amount, onSuccess }) => {
  const onCancel = data => {
    // User pressed "cancel" or close Paypal's popup!
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onError = err => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  let env = "sandbox"; // you can set here to 'production' for production
  let currency = "USD"; // or you can set this value from your props or state

  const client = {
    sandbox:
      "AfEfrgyGBuMZxPrjZ3R4YzDb3WdcBCRrRXK1r6Cdq3wKZfghjRBIjL-b5SU0SVZXKa02tuc67Kdc0_MM",
    production:
      "AaUeMoaGjhfoUInWqYAfMbXrl8ETjs16_horBtZKRc98or25iQZH8fzT4t6nAFBBACqepud1PjSnEBrD"
  };
  return (
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={amount}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
      style={{ tagline: false, size: "small", height: 30 }}
      shipping={1}
    />
  );
};
export default PayPalButton;
