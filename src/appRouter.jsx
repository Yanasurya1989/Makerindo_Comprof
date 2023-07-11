import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import App from "./App";
import Career from "./components/career/Career";

const AppRouter = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" exact components={App}/>
            <Route path="/career" components={Career}/>
        </Routes>
    </BrowserRouter>
};

export default AppRouter;