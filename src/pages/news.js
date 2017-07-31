import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOne, minusOne } from '../actions/actions';

require('./news.css');

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        this.props.dispatch(addOne());
    }
    render() {
        const { count } = this.state;
        const { newsLatest } = this.props.data;
        return (
            <div>
                {
                    newsLatest.stories.map(item => (
                        <div className="row">
                            <div className="feed-card" key={item.id}>
                                <img src={'http://lovestreet.leanapp.cn/zhihu/resource?url=' + item.images[0]} />
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))
                }
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