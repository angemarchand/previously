// import lib
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch,} from "react-router-dom";



// Router

const AppRouter = () => {



    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route path='/' component={Home} exact={true} />
                </Switch>

            </Fragment>
        </BrowserRouter>
    );
};

export default AppRouter;