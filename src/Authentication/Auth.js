const getToken = () => { 
    return localStorage.getItem('token');
}

const getUserLevel = () => {
    const user = parseJwt(getToken());
    return user.role;
}

const isAuthenticated = () => {
    if (getToken() == null) {
        return false;
    } else {
        return true;
    }
}

const getUserId = () => {
    const user = parseJwt(getToken());
    return user.id;
}

const parseJwt = (token)=> {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
module.exports = {
    getToken,
    getUserLevel,
    isAuthenticated,
    getUserId
}