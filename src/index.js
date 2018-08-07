import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeNavbar from './components/HomeNavbar';
import Header from './components/Header';
import InClass from './components/InClass';
import NewWayStudy from './components/NewWayStudy';
import GreatTeacher from './components/GreatTeacher';
import GreatClass from './components/GreatClass';
import VIPService from './components/VIPService';
import WeixinReserve from './components/WeixinReserve';
import ReliableCourse from './components/ReliableCourse';
import Footer from './components/Footer';
import './css/Index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <HomeNavbar/>
        <Header/>
        <InClass/>
        <NewWayStudy/>
        <GreatTeacher/>
        <GreatClass/>
        <VIPService/>
        <WeixinReserve/>
        <ReliableCourse/>
        <Footer/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
