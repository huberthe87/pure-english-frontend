import React, {Component} from 'react';
import '../css/HomeNavbar.css';
import {Nav, NavItem, Navbar} from "react-bootstrap";

class HomeNavbar extends Component {
    constructor(props) {
        super(props);
        this.scrollToGreatTeacher = this.scrollToGreatTeacher.bind(this);
    }

    scrollToGreatTeacher() {
        document.getElementById("GreatForeignTeacher").scrollIntoView({behavior: "smooth", block: "start"});
    }

    scrollToGreatClass() {
        document.getElementById("GreatClass").scrollIntoView({behavior: "smooth", block: "start"})
    }

    scrollToWechatReserve() {
        document.getElementById("WeixinReserve").scrollIntoView({behavior: "smooth", block: "start"})
    }

    render() {
        return (
            <div>
                <Navbar className="HomeNavbar">
                    <Navbar.Header>
                        <Navbar.Brand className="HomeNavbar-Brand">
                            <a className="HomeNavbar-Brand-Link" href="#"/>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight className="HomeNavbar-Nav">
                        <NavItem eventKey={1} onClick={this.scrollToGreatTeacher}>
                            外教师资
                        </NavItem>
                        <NavItem eventKey={2} onClick={this.scrollToGreatClass}>
                            课程体系
                        </NavItem>
                        <NavItem eventKey={3} onClick={this.scrollToWechatReserve}>
                            如何上课
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default HomeNavbar;

