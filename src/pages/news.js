import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    add() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <button className="btn" onClick={this.add.bind(this)}>CLICK</button>
                <p>{count}</p>
            </div>
        )
    }
}

export default connect()(News);