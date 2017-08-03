import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOne, minusOne } from '../actions/actions';
import ReactPullToRefresh from 'react-pull-to-refresh';

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
    handleRefresh(dispatch, resolve, reject) {
        this.props.dispatch(addOne());
    }
    render() {
        const { count } = this.state;
        const { newsLatest } = this.props.data;
        const { dispatch } = this.props;
        return (
            <ReactPullToRefresh onRefresh={this.handleRefresh.bind(this)} style={{
                textAlign: 'center'
            }}>
              <h3>Pull down to refresh</h3>
                <div className="row">
                    {
                        newsLatest.stories.map(item => (
                            <div className="feed-card col" key={item.id}>
                                <img src={'http://lovestreet.leanapp.cn/zhihu/resource?url=' + item.images[0]} />
                                <p>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </ReactPullToRefresh>
        )
    }
}

function Lists(state) {
    return {
        data: state.lists
    }
}

export default connect(Lists)(News);