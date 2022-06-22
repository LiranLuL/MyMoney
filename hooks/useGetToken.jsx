const useGetToken = () => {
  const user = localStorage.getItem("user");
  if (!user) return "";
  return "Bearer " + (JSON.parse(user)).token;
};
export default useGetToken;
