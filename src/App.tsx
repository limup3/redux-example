import React from 'react';
import './App.css';
import {Member} from './pages'
import Counter from "./pages/Counter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Greeting from "./components/member/Greeting";
import CounterComponent from "./counter/CounterComponent";
import CounterContainer from "./counter/CounterContainer";

const App = () => <div className="App">
    <CounterContainer/>
    </div>



export default App;
