import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import InClass from './components/InClass';
import NewWayStudy from './components/NewWayStudy';
import ReliableCourse from './components/ReliableCourse';
import Footer from './components/Footer';
import {Thumbnail, Button, Image, Grid, Col, Row} from 'react-bootstrap';

import GreatTeacherLogo from './img/great-teacher-logo.png';
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
        <Thumbnail src={GreatTeacherLogo} alt='Great Teacher' style={midTitleStyle}>
            <h2>严选欧美外教</h2>
        </Thumbnail>
        <Thumbnail src={GreatClassSystemLogo} alt='Great Class System' style={midTitleStyle}>
            <h2>科学分级课程体系</h2>
        </Thumbnail>
        <Image src={GreatClassSystem} responsive style={{width: '80%', margin: '0 auto'}}/>

        <Thumbnail src={VipServiceLogo} alt='VIP Service' style={midTitleStyle}>
            <h2>多位一体VIP跟踪服务</h2>
        </Thumbnail>
        <Thumbnail src={WeixinReserveLogo} alt='WeChat Reservation' style={midTitleStyle}>
            <h2>微信约课，随时上课</h2>
        </Thumbnail>
        <Grid>
            <Row>
                <Col xs={3}>
                    <Thumbnail src={WeixinReserveBuyCourse} alt='WeChat Reservation'
                               style={{textAlign: 'center', border: 'none', boxShadow: 'none'}}>
                        <h3>购买课程</h3>
                    </Thumbnail>
                </Col>
                <Col xs={3}>
                    <Thumbnail src={WeixinReserveBookCourse} alt='WeChat Reservation'
                               style={{textAlign: 'center', border: 'none', boxShadow: 'none'}}>
                        <h3>微信约课</h3>
                    </Thumbnail>
                </Col>
                <Col xs={3}>
                    <Thumbnail src={WeixinReserveInClass} alt='WeChat Reservation'
                               style={{textAlign: 'center', border: 'none', boxShadow: 'none'}}>
                        <h3>电脑/平板上课</h3>
                    </Thumbnail>
                </Col>
                <Col xs={3}>
                    <Thumbnail src={WeixinReserveParentsInspect} alt='WeChat Reservation'
                               style={{textAlign: 'center', border: 'none', boxShadow: 'none'}}>
                        <h3>家长随时云端看课堂</h3>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
        <Thumbnail src={ReliableCourseLogo} alt='ReliableCourse' style={midTitleStyle}>
            <h2>精明家长信赖之选</h2>
        </Thumbnail>
        <ReliableCourse/>
        <Footer/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
