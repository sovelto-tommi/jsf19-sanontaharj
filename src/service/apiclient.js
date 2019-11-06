const url = '/api/quotes';

export const fetchAllQuotes = () => {
    return fetch(url)
    .then(resp=>resp.json())
}
