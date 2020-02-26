import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

const PayPalButton = ({ amount }) => {
  const onSuccess = payment => {
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onCancel = data => {
    // User pressed "cancel" or close Paypal's popup!
    console.log("The payment was cancelled!", data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onError = err => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  let env = "sandbox"; // you can set here to 'production' for production
  let currency = "USD"; // or you can set this value from your props or state

  const client = {
    sandbox:
      "AXVrhkcJFjN6NthchFFZsCDNtiwqoepqT3s4yc59GNAkKrh-dzFw_PQuqa1i_nID9iXDWUZLOP5Aln67"
    // production: "YOUR-PRODUCTION-APP-ID"
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
    />
  );
};
export default PayPalButton;
