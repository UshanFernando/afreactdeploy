const getToken = () => { 
    return localStorage.getItem('token');
}

const getUserLevel = () => {
    const user = parseJwt(getToken);
    return user.utype;
}

const parseJwt = (token)=> {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}