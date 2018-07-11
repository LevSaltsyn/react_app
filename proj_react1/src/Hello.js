import React, { Component } from 'react';

class Lablel extends Component {
    render() {
        const children = this.props.children;
        return (
            <span style = {{color: 'red'}}>{children}</span>
        )
    }
}

class Hello extends Component {
    render() {
        return (
            <div>Hello <Lablel>World</Lablel>!</div>
        )
    }
}
export default Hello;

