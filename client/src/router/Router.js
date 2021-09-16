
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch,} from "react-router-dom";
import Home from '../views/Home';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"
import OneSerie from '../components/OneSerie';


const AppRouter = () => {



    return (
        <BrowserRouter>
            <Fragment>
                <Navbar />

                <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path="/serie/:id" component={OneSerie} />
                </Switch>
                <Footer />
            </Fragment>
        </BrowserRouter>
    );
};

export default AppRouter;