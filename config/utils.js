export const isLoggedIn = () => {
    let user = localStorage.getItem("user")
    if(user !== "" && user !== null) 
        return true;
    return false;
}