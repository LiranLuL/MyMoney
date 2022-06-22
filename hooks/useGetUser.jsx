const UseGetUser = () => {
  const user = localStorage.getItem("user");
  if(!user) return "";
  return JSON.parse(user);
};
export default UseGetUser;
