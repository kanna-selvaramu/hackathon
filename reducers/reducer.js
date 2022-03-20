const initialState = {
    challenges : [{
        "title": "",
        "desc": "",
        "cat": "", 
        "date": "",
        "upvote": ""
    }]
}

export function challengeReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case "UPDATE_CHALLENGE" : 
            return { ...state, challenges : action.payload.challenge}
        case "ADD_CHALLENGE" : 
        return { ...state, challenges:  [...state.challenges, action.payload] }
        default:
            return state;
    }
}