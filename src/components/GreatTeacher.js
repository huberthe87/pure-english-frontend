import React, {Component} from 'react';
import {Thumbnail, Grid, Col, Row} from 'react-bootstrap';
import '../css/GreatTeacher.css';
import GreatTeacherLogo from '../img/great-teacher-logo.png';
import GreatTeacherPic from '../img/great-teacher.png';

class GreatTeacher extends Component {
    render() {
        return (
            <div className='GreatTheacher'>
                <Thumbnail src={GreatTeacherLogo} alt='Great Teacher' className='GreatTheacher-thumbnail'>
                    <h2>严选欧美外教</h2>
                </Thumbnail>
                <div className="GreatTheacher-content">
                    <Grid>
                        <Row>
                            <Col xs={5}>
                                <Introduction title='100%' content='来自欧美'/>
                                <Introduction title='100%' content='来自欧美'/>
                                <Introduction title='100%' content='来自欧美'/>
                            </Col>
                            <Col xs={7}>
                                <img src={GreatTeacherPic} alt=""/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

class Introduction extends Component {
    render() {
        return (
            <div className='GreatTheacherIntroduction'>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default GreatTeacher;