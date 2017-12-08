import React, { Component } from "react";
import { connect } from "react-redux";

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postsReceived: false
        };
    }

    render() {
        if(this.props.postsReceived) {
        const posts = this.props.results.data.map(post => {
            const image = post.images.low_resolution.url;
            return <img key={post.id} src={image} />;
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
export default connect(mapStateToProps, null)(Images);