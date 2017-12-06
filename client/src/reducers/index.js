const INITIAL_STATE = {
	data: {}
};

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case "GET_DATA":
            		return Object.assign({}, state, {
               		 data: {}
            });
		case "RECEIVE_DATA":
            		return Object.assign({}, state, {
               		 data: action.results,
            });
		default:
			return state;
	}
};