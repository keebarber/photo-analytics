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

    const user = this.props.userResults.data;

    const full_name = user.full_name;
    const username = user.username;
    const profilepicture = user.profile_picture;
    const bio = user.bio;
    const followers = user.counts.followed_by;
    const follows = user.counts.follows;
    const numberOfPosts = user.counts.media;

        return (
            <div className = "flex-container">
                <div className="userinformation">
                  <img src={profilepicture} alt="User profile picture"/>
                  <p id="_fullname">Full Name: {full_name}</p>
                  <p id="_username">Username: {username}</p>
                  <p id="_bio">Bio: {bio}</p>
                    <div className="_userstats">
                      <p id="_followers" className="_userstats">Followers: {followers}</p>
                      <p id="_following" className="_userstats">Following: {follows}</p>
                      <p id="_numberofposts" className="_userstats">Number of Posts: {numberOfPosts}</p>
                    </div>
               </div>
            </div>
        );
    } else {
            return <div>User Information: Nothing Received</div>;
        }
}
}

const mapStateToProps = state => {
    return {
        results: state.results,
        userResults: state.userResults,
        postsReceived: state.postsReceived
    };
};
export default connect(mapStateToProps, null)(UserInfomation);
