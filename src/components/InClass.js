import React, {Component} from 'react';
import '../css/InClass.css';
import InClassPic from '../img/inclass.png'

class Section extends Component {
    render() {
        return (
            <section className='InClass' style={this.props.style}>
                <img src={InClassPic} alt=""/>
            </section>
        );
    }
}

export default Section;