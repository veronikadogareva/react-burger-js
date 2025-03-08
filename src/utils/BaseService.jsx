const BASEURL = "https://norma.nomoreparties.space/api";

export default class BaseService {
  static sendRequest(url, options = {}) {
    return fetch(BASEURL + url, options)
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
  static getIngredients() {
    const url = "/ingredients";
    return this.sendRequest(url);
  }
  static sendOrder(orderData) {
    const url = "/orders";
    return this.sendRequest(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
  }
}
