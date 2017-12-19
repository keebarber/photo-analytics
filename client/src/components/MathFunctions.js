import React, { Component } from "react";
import { connect } from "react-redux";
import { _ } from 'lodash';
import { flatten } from 'lodash';


class MathFunctions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postsReceived: false
        };
    }
    render() {
     
//  This is the output of the date stamp in human readable form
 let e=1513389788;
var myDate = new Date( e *1000);
console.log("Below is the date string.");
console.log(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
console.log(myDate.toLocaleString());
const seconds = myDate.getSeconds(); // Returns the seconds as an integer
const minutes = myDate.getMinutes(); // Returns the minutes as an integer
const hours = myDate.getHours(); // Returns the hours as an integer 24-hour
const dayOfWeek = myDate.getDay(); // Returns the day as an integer 0-6
const month = myDate.getMonth(); // Returns the month as an integer 0-11
const date = myDate.getDate(); //   Returns the day as an integer starting from 1-31
console.log("Seconds of post: "+ seconds);
console.log("Minutes of post: " + minutes);
console.log("Hours of post: " + hours);
console.log("Day of week: " + dayOfWeek);
console.log("Month of post: " + month);
console.log("Date of post: " + date);


        if(this.props.postsReceived) {
            let totalLiked = 0;
            let topFive = {};
            let bottomFive = {};
            const posts = this.props.results.data;



//  Returns total number of recent likes
        const totalLikes = this.props.results.data.map(post => {
            let toNumber = Number(post.likes.count);
            totalLiked = toNumber + totalLiked;
            return totalLiked;
        });
//  Computes the average likes for each post
    const averageLikes = totalLiked / 20;




//  Computes the top 5 posts
    const top5 = posts.sort((a,b) => {
        return  a.likes.count < b.likes.count ? 1 : -1; }
                    ).slice(0,5);

    const top5Posts = top5.map(post => {
        return  (<div className="five" key={post.id}>
                    <img src={post.images.thumbnail.url} />
                    <p>{post.likes.count}</p>
                </div>);
});




//Computes the lowest 5 posts
    const bottom5 = posts.sort((a,b) => {
        return  a.likes.count < b.likes.count ? -1 : 1; }
                    ).slice(0,5);

    const bottom5Posts = bottom5.map(post => {
         return  (<div className="five" key={post.id}>
                    <img src={post.images.thumbnail.url} />
                    <p>{post.likes.count}</p>
                </div>);
});




//  Sorts posts by day of week
    const postsByDayOfWeek = posts.map(post => {
        let timeOfPost = new Date(post.created_time * 1000);
        let dayOfPost = timeOfPost.getDay();
        const arrayOfDays = [];

        arrayOfDays.push(dayOfPost);
        return arrayOfDays;
    });

 const dayCount = postsByDayOfWeek.reduce( (obj, day) => {
            if(!obj[day]) {
                obj[day] = 0;
            }
            obj[day]++;
            return obj;
        }, {});
    console.log(dayCount);




// Sorts posts by time of day
const postsByTimeOfDay = posts.map(post => {
    let timeOfPost = new Date(post.created_time * 1000);
    let hourOfPost = timeOfPost.getHours();
    const arrayOfHours = [];

    arrayOfHours.push(hourOfPost);
    return arrayOfHours;
});

const hourCount = postsByTimeOfDay.reduce( (obj, hour) => {
                if(!obj[hour]) {
                obj[hour] = 0;
            }
            obj[hour]++;
            return obj;
        }, {});
    console.log(hourCount);

//  Collects an array of all tags used in recent posts
    const collectionOfTags = posts.map(post => {
        const arrayOfTags = [];

        let newArray = post.tags.map(tag => {
            return arrayOfTags.push(tag);
        });
        return arrayOfTags;
    });

let flattened = flatten(collectionOfTags);
console.log(flattened);
        




        return (
            <div id="maths">
                <div id="topfive">Top 10 photos by likes: {top5Posts}</div>
                <div id="bottomfive">Bottom 5 photos by likes: {bottom5Posts}</div>
                <div>Average Likes: {averageLikes}</div>
                <div>Total Likes: {totalLiked}</div>
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
export default connect(mapStateToProps, null)(MathFunctions);