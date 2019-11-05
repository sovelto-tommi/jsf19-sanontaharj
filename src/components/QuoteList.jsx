import React, { Component } from 'react'
import Quote from './Quote'

export default class QuoteList extends Component {
    render() {
        const quoteitems = this.props.quotes
        .sort(function(q1, q2){
            const author1last = q1.author.split(" ").slice(-1)[0];
            const author2last = q2.author.split(" ").slice(-1)[0];
            if (author1last === author2last) return 0;
            if (author1last > author2last) return 1;
            return -1;
      })
  .map((quote)=> {
            return <Quote deleteCallback={this.props.deleteCallback} quote={quote} key={quote.id}/>
        })
        return (
            <div className="QuoteList AppComponent">
                <h2>QuoteList</h2>
                {quoteitems}
            </div>
        )
    }
}
