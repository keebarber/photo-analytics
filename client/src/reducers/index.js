const INITIAL_STATE = {
	results: {},
	userResults: {},
	postsReceived: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_DATA":
			return Object.assign({}, state, {});
		case "RECEIVE_DATA":
			return Object.assign({}, state, {
				results: action.results,
				postsReceived: true
			});
		case "RECEIVE_USER_DATA":
			return Object.assign({}, state, {
				userResults: action.userResults,
			});
		default:
			return state;
	}
};
