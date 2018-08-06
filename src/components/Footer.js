import React, {Component} from 'react';
import '../css/Footer.css'
import {Col, Grid, Image, Row, Thumbnail} from "react-bootstrap";
import WechatLogo from '../img/wechat-logo.png';

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <Grid className="Footer-Grid">
                    <Row>
                        <Col xs={1}>
                            <Thumbnail src={WechatLogo} alt="Footer" className="Footer-Thumbnail">
                                <h3>官方微信</h3>
                            </Thumbnail>
                        </Col>
                        <Col xs={1}>
                            <Thumbnail src={WechatLogo} alt="Footer" className="Footer-Thumbnail">
                                <h3>官方微信</h3>
                            </Thumbnail>
                        </Col>
                        <Col xs={6}>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Footer;