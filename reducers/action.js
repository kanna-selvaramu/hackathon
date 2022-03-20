import { store } from ".";

export function updateChallenge(json) {
    localStorage.setItem("challenges" , JSON.stringify(json))
    store.dispatch({
        type: "UPDATE_CHALLENGE",
        payload: {
            challenge : json,
        },
    });
}

export function addNewChallenge(data) {
    let json = localStorage.getItem("challenges")
    if(json!== null) {
        json = JSON.parse(json)
        json = [ ...json , data]
        localStorage.setItem("challenges",JSON.stringify(json));
    }
    store.dispatch({
        type: "ADD_CHALLENGE", 
        payload: { data } 
    })
}