import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useRef } from 'react';

export default function Login() {

    const paypal = useRef;
    return(
        <>
            <h1 className='login'>Login</h1>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
        </>
    )
}