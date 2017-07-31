import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOne, minusOne } from '../actions/actions';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const { count } = this.state;
        const { dispatch, data, number } = this.props;
        return (
            <div>
                <button className="btn full" onClick={() => dispatch(addOne())}>ADD 1</button>
                <button className="btn full" onClick={() => dispatch(minusOne())}>MINUS 1</button>
                <p>{data.number}</p>
            </div>
        )
    }
}

function Lists(state) {
    return {
        data: state.lists
    }
}

export default connect(Lists)(News);