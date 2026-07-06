import React from 'react'
import Script from 'next/script'

const Contact = () => {
    return (
        <div>
            {/* {alert("Welcome to contact page")}//This won't work because alert is a client side funtion but contact is server side component */}
            <Script>
                {`alert("Welcome to contact page")`}
            </Script>
            I am Contact
        </div>
    )
}

export default Contact

export const metadata = {
    title: "Contact Facebook",
    description: "Connect with the world",
};
