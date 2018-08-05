import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import InClass from './components/InClass';
import NewWayStudy from './components/NewWayStudy';
import GreatTeacher from './components/GreatTeacher';
import GreatClass from './components/GreatClass';
import VIPService from './components/VIPService';
import WeixinReserve from './components/WeixinReserve';
import ReliableCourse from './components/ReliableCourse';
import Footer from './components/Footer';
import {Thumbnail, Button, Image, Grid, Col, Row} from 'react-bootstrap';

import GreatClassSystemLogo from './img/great-class-system-logo.png';
import GreatClassSystem from './img/great-class-system.png';
import VipServiceLogo from './img/vip-service-logo.png';
import WeixinReserveLogo from './img/weixin-reserve-logo.png';
import WeixinReserveBuyCourse from './img/weixin-reserve-buy-course.png';
import WeixinReserveBookCourse from './img/weixin-reserve-book-course.png';
import WeixinReserveInClass from './img/weixin-reserve-in-class.png';
import WeixinReserveParentsInspect from './img/weixin-reserve-parents-inspect.png';
import ReliableCourseLogo from './img/reliable-course-logo.png';
import ReliableCourseChatLeft from './img/reliable-course-chat-left.png';
import ReliableCourseChatRight from './img/reliable-course-chat-right.png';
import ReliableCourseHeadPortrait1 from './img/reliable-course-head-portrait-1.png';
import ReliableCourseHeadPortrait2 from './img/reliable-course-head-portrait-2.png';
import ReliableCourseBg from './img/reliable-course-bg.png';

import registerServiceWorker from './registerServiceWorker';

const midTitleStyle = {
    textAlign: 'center',
    border: 'none',
    boxShadow: 'none',
    fontSize: '32px',
    fontFamily: '微软雅黑',
    fontcolor: 'rgb(0,0,0)',
};
const midTitleStyleInverse = {
    textAlign: 'center',
    border: 'none',
    boxShadow: 'none',
    fontSize: '32px',
    fontFamily: '微软雅黑',
    fontcolor: 'rgb(255,255,255)'
};
const smallTitleStyle = {
    textAlign: 'center',
    border: 'none',
    boxShadow: 'none',
    fontSize: '28px',
    fontFamily: '微软雅黑',
    fontcolor: 'rgb(0,0,0)'
};
const smallTitleStyleInverse = {
    textAlign: 'center',
    border: 'none',
    boxShadow: 'none',
    fontSize: '28px',
    fontFamily: '微软雅黑',
    fontcolor: 'rgb(0,0,0)'
};

ReactDOM.render(
    <div>
        <Navbar/>
        <Header/>
        <InClass/>
        <NewWayStudy/>
        <GreatTeacher/>
        <GreatClass/>
        <VIPService/>
        <WeixinReserve/>

        <Thumbnail src={ReliableCourseLogo} alt='ReliableCourse' style={midTitleStyle}>
            <h2>精明家长信赖之选</h2>
        </Thumbnail>
        <ReliableCourse/>
        <Footer/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
