import $ from "jquery-ajax";
require("dotenv").config();

export function fetchData() {
    console.log(process.env);
    const apiKey = JSON.stringify(process.env.ACCESS_TOKEN);
    console.log(apiKey);
    return function(dispatch) {
        dispatch(getData());
        $.get(
            "https://api.instagram.com/v1/users/self/media/recent/?access_token=1382121603.5ba55fd.e9676234074b4ce8bf674c2ba19a8816",
            function(data) {
                dispatch(receiveData(data));
            }
        );
        $.get(
            "https://api.instagram.com/v1/users/self?access_token=1382121603.5ba55fd.e9676234074b4ce8bf674c2ba19a8816",
            function(userData) {
                dispatch(receiveUserData(userData));
            }
        );
    };
}

function getData() {
    return {
        type: "GET_DATA"
    };
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveData(results) {
    console.log("This is the output from instagram");
    console.log(results);
    return {
        type: "RECEIVE_DATA",
        results
    };
}

function receiveUserData(userResults) {
    console.log("This is the output from instagram");
    console.log(userResults);
    return {
        type: "RECEIVE_USER_DATA",
        userResults
    };
}
