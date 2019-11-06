import React, { Component } from 'react'
import QuoteList from './QuoteList'
import QuoteForm from './QuoteForm';
import {fetchAllQuotes} from '../service/apiclient';

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
        window.alert("Ei toimi");
    }
    deleteQuote = id => {
        window.alert("Ei toimi");
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
