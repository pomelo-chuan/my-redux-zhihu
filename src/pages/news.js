import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class News extends Component {
    render() {
        return (
            <div>
                <button className="btn">ABC</button>
            </div>
        )
    }
}

export default connect()(News);