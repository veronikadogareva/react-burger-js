class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    fetchJson(endpoint) {
        return fetch(`${this.baseUrl}${endpoint}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Произошла ошибка при выполнении запроса. Код ошибки: ${res.status}`);
                }
                return res.json();
            })
            .catch(err => {
                console.error('Ошибка запроса:', err);
                throw err;
            });
    }
}

export default new ApiService('https://norma.nomoreparties.space/api');