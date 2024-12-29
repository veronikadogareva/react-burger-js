const BASEURL = "https://norma.nomoreparties.space/api";

export default class BaseService {
  static sendRequest(url) {
    return fetch(BASEURL + url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Произошла ошибка при выполнении запроса. Код ошибки: ${res.status}`
          );
        }
        return res.json();
      })
      .catch((err) => {
        console.error("Ошибка запроса:", err);
        throw err;
      });
  }
}
