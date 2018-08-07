import React, {Component} from 'react';
import '../css/GreatClass.css';
import {Image, Thumbnail} from "react-bootstrap";
import GreatClassSystemLogo from "../img/great-class-system-logo.png";
import GreatClassSystem from "../img/great-class-system.png";

class GreatClass extends Component {
    render() {
        return (
            <div className="GreatClass" id="GreatClass">
                <Thumbnail src={GreatClassSystemLogo} alt='Great Class System' className="GreatClass-Thumbnail">
                    <h2>科学分级课程体系</h2>
                </Thumbnail>
                <Image src={GreatClassSystem} responsive className="GreatClass-Image"/>
            </div>
        );
    }
}

export default GreatClass;