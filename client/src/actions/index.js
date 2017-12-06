import $  from 'jquery-ajax';

export function fetchData() {

	return function(dispatch){
	dispatch(getData());
        $.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=", function(data) {
            // Here is where we dig into the response JSON to find the data we actually need.
            dispatch(receiveData(data));
        });
     };
}

function getData() {
    return {
        type: "GET_DATA"
    };
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveData(results) {
	console.log(results);
    return {
        type: "RECEIVE_DATA",
        results
    };
}