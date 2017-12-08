import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfomation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postsReceived: false
        };
    }

    render() {
        if(this.props.postsReceived) {
        const posts = this.props.results.data.map(post => {
            return <div key={post.id}>{post.id}</div>;
        });
        return (
            <div>{posts}</div>
        );
    } else {
            return <div>Nothing Received</div>;
        }
}
}

const mapStateToProps = state => {
    return {
        results: state.results,
        postsReceived: state.postsReceived
    };
};
export default connect(mapStateToProps, null)(UserInfomation);
