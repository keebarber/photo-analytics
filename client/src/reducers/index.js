const INITIAL_STATE = {
	results: {},
	postsReceived: false
};

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case "GET_DATA":
            		return Object.assign({}, state, {
            });
		case "RECEIVE_DATA":
            		return Object.assign({}, state, {
               		 results: action.results,
               		 postsReceived: true
            });
		default:
			return state;
	}
};