const UseGetUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export default UseGetUser;
