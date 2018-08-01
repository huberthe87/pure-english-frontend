import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <p>专注5-12岁在线少儿英语</p>
                <p>严选欧美外教</p>
                <p>每节课低至50元</p>
            </div>
        );
    }
}

export default Header;