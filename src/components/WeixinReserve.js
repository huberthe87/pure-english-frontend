import {Col, Grid, Row, Thumbnail} from "react-bootstrap";
import WeixinReserveLogo from "../img/weixin-reserve-logo.png";
import WeixinReserveBuyCourse from "../img/weixin-reserve-buy-course.png";
import WeixinReserveBookCourse from "../img/weixin-reserve-book-course.png";
import WeixinReserveInClass from "../img/weixin-reserve-in-class.png";
import WeixinReserveParentsInspect from "../img/weixin-reserve-parents-inspect.png";
import React, {Component} from "react";
import '../css/WeixinReserve.css';

class WeixinReserve extends Component {
    render() {
        return (
            <div className="WeixinReserve">
                <Thumbnail src={WeixinReserveLogo} alt='WeChat Reservation' className="WeixinReserve-Thumbnail">
                    <h2>微信约课，随时上课</h2>
                </Thumbnail>
                <Grid>
                    <Row>
                        <Col xs={3}>
                            <Thumbnail src={WeixinReserveBuyCourse} alt='WeChat Reservation' className="WeixinReserve-Grid-Thumbnail">
                                <h3>购买课程</h3>
                            </Thumbnail>
                        </Col>
                        <Col xs={3}>
                            <Thumbnail src={WeixinReserveBookCourse} alt='WeChat Reservation' className="WeixinReserve-Grid-Thumbnail">
                                <h3>微信约课</h3>
                            </Thumbnail>
                        </Col>
                        <Col xs={3}>
                            <Thumbnail src={WeixinReserveInClass} alt='WeChat Reservation' className="WeixinReserve-Grid-Thumbnail">
                                <h3>电脑/平板上课</h3>
                            </Thumbnail>
                        </Col>
                        <Col xs={3}>
                            <Thumbnail src={WeixinReserveParentsInspect} alt='WeChat Reservation' className="WeixinReserve-Grid-Thumbnail">
                                <h3>家长随时云端看课堂</h3>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default WeixinReserve;
