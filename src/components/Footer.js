import React, {Component} from 'react';
import '../css/Footer.css'
import {Col, Grid, Image, Row, Thumbnail, Media} from "react-bootstrap";
import WechatLogo from '../img/wechat-logo.png';
import FooterPhone from '../img/footer-phone.png';
import WechatQrCode from '../img/footer-wechat.png';

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <Grid className="Footer-Grid">
                    <Row>
                        <Col xs={2} xsOffset={1}>
                            <Image src={WechatQrCode} alt="WechatQrCode"/>
                        </Col>
                        <Col xs={8} xsPush={1}>
                            <Image src={FooterPhone} alt="PhoneNumber" className="Footer-PhoneNumber"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Footer;