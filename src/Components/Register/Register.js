import React from "react";
import Header from "../HeaderFooter/Header"
import Footer from "../HeaderFooter/Footer"
import FormLogin from "./Formlogin"
import FormRegister from "./FormRegister";


export default function RegisterApp() {
    return (
        <div>
            <Header/>
            <FormRegister/>
            <Footer/>
        </div>
    )
}

