import React, { Component } from 'react';
import './common.css';

import logo from './img/top_bar_logo.png'

class TopBar extends Component {
    render() {
        return <div className="TopBar">
            <img src={logo} className="TopBarLogo" />
            <div className="TopBarLinkArea">
                <text className="TopBarLinkText">外教师资</text>
                <text className="TopBarLinkText">课程体系</text>
                <text className="TopBarLinkText">如何上课</text>
            </div>
        </div>
    }
}


export default TopBar;