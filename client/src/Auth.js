export const Auth = () => {
    const isLoggedIn = localStorage.getItem("token");
    return isLoggedIn ? true : false;
};

