export const checkUserRole = () => {
  const role = localStorage.getItem("ROLE");

  if (role === "BUYER") {
    return "BUYER";
  } else {
    return "SELLER";
  }
};
