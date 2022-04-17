import React from "react";
import { Route } from "react-router-dom";
import Footer from "../pages/HomeTemplate/_component/Footer/Footer";
import Header from "../pages/HomeTemplate/_component/Header/Header";

const HomeTemplate = (props) => {
    let { Component, ...restProps } = props
    return <Route {...restProps} render={(PropsRoute) => {
        return (
            <>
                <Header />
                <Component {...PropsRoute} />
                <Footer />
            </>
        )
    }} />
}
export default HomeTemplate