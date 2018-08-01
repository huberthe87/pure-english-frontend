import React, {Component} from 'react';
import '../css/Section.css';

class Section extends Component {
    render() {
        return (
            <section className='Section' style={this.props.style}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;