import React, { Component } from 'react'
import '../Quote.css';

export default class Quote extends Component {
    poistaminut = () => {
        this.props.deleteCallback(this.props.quote.id);
    }
    showDetails = () => {
        this.props.history.push(`${this.props.match.url}/${this.props.quote.id}`);
    }
    render() {
        const {id, author, quotetext} = this.props.quote;
        return (
            <div className="Quote" onClick={this.showDetails}>
                <span className="quoteid">{id}</span>
                <p className="quotetext">{quotetext}</p>
                <p className="author">{author}</p>
                <p><button type="button" onClick={this.poistaminut}>Delete</button> </p>
            </div>
        )
    }
}
