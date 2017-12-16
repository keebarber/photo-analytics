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
            let image = post.images.low_resolution.url;
            let likes = post.likes.count;
            let comments = post.comments.count;
            let time = post.created_time;
            let tags = post.tags.map(tag => {
                 return tag;
            });
            let link = post.link;
            let location = post.location;

            return (
                    <div key={post.id}>
            {/*           <img src={image} />
                       <p>{tags}</p>*/}
                    </div>
                );
        });
        return (
            <div className="images">
                <div className="each-image">{posts}</div>
            </div>
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