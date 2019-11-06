import React, { Component } from 'react'
import Quote from './Quote'
import { fetchAllQuotes, deleteQuoteWithId } from '../service/apiclient';

export default class QuoteList extends Component {
    state = {quotes: []}
    componentDidMount() {
        this.fetchQuoteList();
    }

    fetchQuoteList = () => {
        fetchAllQuotes().then(quotes=> {
            this.setState({quotes});
        })
    }
    deleteQuote = id => {
        deleteQuoteWithId(id).then(response=> {
            if (response.status !== 200) {
                alert("Virhe pyynnössä, status: " + response.status);
            }
            this.fetchQuoteList();
        })
    }
    render() {
        const quoteitems = this.state.quotes
        .sort(function(q1, q2){
            const author1last = q1.author.split(" ").slice(-1)[0];
            const author2last = q2.author.split(" ").slice(-1)[0];
            if (author1last === author2last) return 0;
            if (author1last > author2last) return 1;
            return -1;
      })
  .map((quote)=> {
            return <Quote deleteCallback={this.deleteQuote} quote={quote} key={quote.id}/>
        })
        return (
            <div className="QuoteList AppComponent">
                <h2>QuoteList</h2>
                {quoteitems}
            </div>
        )
    }
}
