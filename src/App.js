import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";

import Layout from "./components/layout/index.jsx";

import {routes} from "./router";


class App extends Component {
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        {
                            routes.map((item,index) => {

                                if(item.exact){
                                    return (
                                        <Route
                                            key={index}
                                            exact
                                            path={item.path}
                                            component={item.component}
                                        ></Route>
                                    )
                                }else{
                                    return (
                                        <Route
                                            key={index}
                                            path={item.path}
                                            component={item.component}
                                        ></Route>
                                    )
                                }
                            })
                        }
                    </Switch>
                </Layout>
            </Router>
        )
    }
}


export default App;
