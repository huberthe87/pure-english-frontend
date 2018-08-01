import React, {Component} from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <Brand></Brand>
            </nav>);
    }
}
class Brand extends Component {
    render() {
        return (<a className="Navbar-brand" href="#"></a>);
    }
}
class Nav extends Component {
    render() {
        return (<div className="Nav"></div>);
    }
}
class NavItem extends Component {
    render() {
        return (
            <li className="NavItem">
                <a className="NavItem-link" href="{this.props.href}">Home <span className="sr-only">{this.props.text}</span></a>
            </li>
        );
    }
}

export default Navbar;

