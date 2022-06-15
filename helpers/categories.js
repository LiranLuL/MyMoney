import getConfig from "next/config";
import useGetToken from "hooks/useGetToken";
const { publicRuntimeConfig } = getConfig();
const url = publicRuntimeConfig.apiUrl + "/users/categories";

export async function putCategorie(username, amount, categorie, date, comment) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: useGetToken() },
    body: JSON.stringify({ username, amount, categorie, date, comment }),
  };

  return fetch(url, requestOptions).then(handleResponse);
}

export async function getCategories(username) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: useGetToken() },
    body: JSON.stringify({ username: username }),
  };
  const result = await fetch(url, requestOptions).then(handleResponse);
  return result;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
