import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Spinner from './utility/Spinner/Spinner';

const Account = lazy(()=>import('./pages/Account/Account'));
const Footer = lazy(()=>import('./utility/Footer/Footer'));
const Home = lazy(()=>import('./pages/Home/Home'));
const NavBar = lazy(()=>import('./utility/NavBar/NavBar'));
const Modal = lazy(()=>import('./utility/Modal/Modal'));
const Queue = lazy(()=>import('./pages/Queue/Queue'));

class App extends Component{

	render(){
    	return(
      	<Router>
			<Suspense fallback={<Spinner />}>
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={Home} />
				<Route path="/account" component={Account} />
				<Route path="/queue" component={Queue} />
				<Route path="/" component={Modal} />
				<Route exact path="/" component={Footer} />
            </Suspense>
      	</Router>
    	)
  	}

}

export default App;
