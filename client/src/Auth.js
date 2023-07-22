 
export const Auth = () => {
//   const isLoggedIn = true;
    const isLoggedIn = localStorage.getItem("token");
  const Role = localStorage.getItem("ROLE");
  //   console.log(isLoggedIn && Role)
  if (isLoggedIn && Role) {
    console.log("ISLOGGED IN");
    return isLoggedIn ? true : false;
  }
  return false;
};

// export const checkForRole = () => {
//   const role = localStorage.getItem("ROLE");
//   if (role === "BUYER") {
//     return role;
//   } else if (role === "SELLER") {
//     return role;
//   } else {
//     return false
//   }
// };
