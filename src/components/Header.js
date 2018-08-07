import React, {Component} from 'react';
import '../css/Header.css';
import '../css/WhiteCloud.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <p>专注5-12岁在线少儿英语</p>
                <p>严选欧美外教</p>
                <p>每节课低至50元</p>
                {/*动画特效*/}
                <div className="WhiteCloud-1">
                </div>
                <div className="WhiteCloud-2">
                </div>
                <div className="WhiteCloud-3">
                </div>
                <div className="WhiteCloud-4">
                </div>
                <div className="WhiteCloud-5">
                </div>
                <Bird/>
            </div>
        );
    }
}

class Bird extends Component {
    constructor(props) {
        super(props);
        this.state = {left: 0}
    }
    componentDidMount() {
        this.setState({left: 1000})
    }
    render() {
        let style = {};
        // this.state.left && (style.left = this.state.left + 'px');
        return (
            <div className="Bird" style={style}>
            </div>
        );
    }

}

export default Header;