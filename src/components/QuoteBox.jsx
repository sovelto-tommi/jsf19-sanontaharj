import React, { Component } from 'react'
import QuoteList from './QuoteList'
import QuoteForm from './QuoteForm';
import {fetchAllQuotes, postQuote, deleteQuoteWithId} from '../service/apiclient';

export default class QuoteBox extends Component {
    state = {quotes: []};

    componentDidMount() {
        this.fetchQuoteList();
    }

    fetchQuoteList = () => {
        fetchAllQuotes().then(quotes=> {
            this.setState({quotes});
        })
    }

    addQuote = quote => {
        postQuote(quote).then(vastaus=> {
            this.fetchQuoteList();
        })
    }
    deleteQuote = id => {
        deleteQuoteWithId(id).then(vastaus=> {
            if (vastaus.status !== 200) {
                alert("Virhe pyynnössä, status: " + vastaus.status);
            }
            this.fetchQuoteList();
        })
    }
    render() {
        return (
            <div>
                <QuoteForm addCallback={this.addQuote}/>
                <QuoteList deleteCallback={this.deleteQuote} quotes={this.state.quotes}/>
            </div>
        )
    }
}
