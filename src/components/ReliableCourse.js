import React, {Component} from 'react';
import {Thumbnail, Button, Image, Grid, Col, Row} from 'react-bootstrap';
import '../css/ReliableCourse.css';
import ReliableCourseHeadPortrait1 from '../img/reliable-course-head-portrait-1.png';
import ReliableCourseHeadPortrait2 from '../img/reliable-course-head-portrait-2.png';
import ReliableCourseChatLeft from '../img/reliable-course-chat-left.png';
import ReliableCourseChatRight from '../img/reliable-course-chat-right.png';

class ReliableCourse extends Component {
    render() {
        return (
            <div className='ReliableCourse'>
                <div className='ReliableCourse-left'>
                    <Grid>
                        <Row>
                            <Col xs={2} xsOffset={1}>
                                <img className='head-portrait' src={ReliableCourseHeadPortrait1} alt=""/>
                            </Col>
                            <Col xs={8}>
                                <img className='chat' src={ReliableCourseChatLeft} alt=""/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className='ReliableCourse-right'>
                    <Grid>
                        <Row>
                            <Col xs={8} xsOffset={1}>
                                <img className='chat' src={ReliableCourseChatRight} alt=""/>
                            </Col>
                            <Col xs={2}>
                                <img className='head-portrait' src={ReliableCourseHeadPortrait2} alt=""/>
                            </Col>
                        </Row>
                    </Grid>


                </div>
            </div>
        );
    }
}

export default ReliableCourse;