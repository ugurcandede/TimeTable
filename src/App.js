import './App.scss';
import React from "react";
import {Route, Switch} from 'react-router-dom';
import {name} from '../package.json';
import Dashboard from './components/Dashboard/Dashboard';
import HeaderTime from './components/Navbar/HeaderTime';
import AddOrUpdate from './components/AddOrUpdate/AddOrUpdate';
import FabButton from './components/FabButton/FabButton';

function App() {
    let css = "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";
    console.log(`%c ${name} `, css);

    return (
        <div className="App">
            <HeaderTime/>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/meet" component={AddOrUpdate}/>
                <Route path="/meet/:meetId" component={AddOrUpdate}/>
            </Switch>
            <FabButton/>
        </div>
    );
}

export default App;
