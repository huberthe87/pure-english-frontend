import React, {Component} from 'react';
import VipServiceLogo from "../img/vip-service-logo.png";
import {Col, Grid, Row, Thumbnail} from "react-bootstrap";
import '../css/VIPService.css';
import VIPServiceCustomer from '../img/vip-service-customer.png';
import VIPServiceChinaTeacher from '../img/vip-service-china-teacher.png';
import VIPServiceForeignTeacher from '../img/vip-service-foreign-teacher.png';

class VIPService extends Component {
    render() {
        return (
            <div className="VIPService">
                <Thumbnail src={VipServiceLogo} alt='VIP Service' className="VIPService-Thumbnail">
                    <h2>多位一体VIP跟踪服务</h2>
                </Thumbnail>
                <Grid className="VIPService-Grid">
                    <Row>
                        <Col xs={4}>
                            <Thumbnail src={VIPServiceCustomer} alt='VIP Service' className="VIPService-SubThumbnail">
                                <h2>多位一体VIP跟踪服务</h2>
                            </Thumbnail>
                        </Col>
                        <Col xs={4}>
                            <Thumbnail src={VIPServiceForeignTeacher} alt='VIP Service' className="VIPService-SubThumbnail">
                                <h2>多位一体VIP跟踪服务</h2>
                            </Thumbnail>
                        </Col>
                        <Col xs={4}>
                            <Thumbnail src={VIPServiceChinaTeacher} alt='VIP Service' className="VIPService-SubThumbnail">
                                <h2>多位一体VIP跟踪服务</h2>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default VIPService;