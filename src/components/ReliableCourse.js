import React, {Component} from 'react';
import {Thumbnail, Button, Image, Grid, Col, Row} from 'react-bootstrap';
import '../css/ReliableCourse.css';
import ReliableCourseHeadPortrait1 from '../img/reliable-course-head-portrait-1.png';
import ReliableCourseHeadPortrait2 from '../img/reliable-course-head-portrait-2.png';
import ReliableCourseChatLeft from '../img/reliable-course-chat-left.png';
import ReliableCourseChatRight from '../img/reliable-course-chat-right.png';
import ReliableCourseLogo from "../img/reliable-course-logo.png";

class ReliableCourse extends Component {
    render() {
        return (
            <div className="ReliableCourse">
                <Thumbnail src={ReliableCourseLogo} alt='ReliableCourse' className="ReliableCourse-Thumbnail">
                    <h2>精明家长信赖之选</h2>
                </Thumbnail>
                <div className='ReliableCourse-Content'>
                    <div className='ReliableCourse-left'>
                        <Grid>
                            <Row>
                                <Col xs={2} xsOffset={1}>
                                    <img className='head-portrait' src={ReliableCourseHeadPortrait1} alt=""/>
                                </Col>
                                <Col xs={8}>
                                    <div className='chat'>
                                        <p>孩子处于语言学习关键期，普尔英语让三四线城市孩子，接受到了最纯正的英语，很好！</p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                    <div className='ReliableCourse-right'>
                        <Grid>
                            <Row>
                                <Col xs={8} xsOffset={1}>
                                    <div className='chat'>
                                        <p>儿子说，这是他上过的最有趣的英语课，现在上普尔英语课，成为他很期待的一件事！</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <img className='head-portrait' src={ReliableCourseHeadPortrait2} alt=""/>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReliableCourse;