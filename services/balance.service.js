import getConfig from "next/config";
import useGetToken from "hooks/useGetToken";
import UseGetUser from "hooks/useGetUser";
const { publicRuntimeConfig } = getConfig();
const url = publicRuntimeConfig.apiUrl + "/users/balance";

export async function addBalance(source, amount) {
  const user = UseGetUser();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: useGetToken() },
    body: JSON.stringify({ source, amount, username: user.username }),
  };
  const result = await handleResponse(await fetch(url, requestOptions));
  return result;
}

export async function getBalance() {
  const user = UseGetUser();
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: useGetToken() },
    body: JSON.stringify({ username: user.username }),
  };
  return handleResponse(await fetch(url, requestOptions));
}

async function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status)) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
