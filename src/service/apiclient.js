const url = '/api/quotes';

export const fetchAllQuotes = () => {
    return fetch(url)
    .then(resp=>resp.json())
}
export const postQuote = (quote) => {
    return fetch(url,  {
          method: 'POST',
          headers: {'Content-Type': 'application/json' },
          body: JSON.stringify(quote)
      })
  }

  export const deleteQuoteWithId = (id) => {
    return fetch(`${url}/${id}`,  {
        method: 'DELETE'
    })
  }
  