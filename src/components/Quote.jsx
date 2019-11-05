import React, { Component } from 'react'

export default class Quote extends Component {
    poistaminut = () => {
        this.props.deleteCallback(this.props.quote.id);
    }
    render() {
        const {id, author, quotetext} = this.props.quote;
        return (
            <div className="Quote">
                <span className="quoteid">{id}</span>
                <p className="quotetext">{quotetext}</p>
                <p className="author">{author}</p>
                <p><button type="button" onClick={this.poistaminut}>Delete</button> </p>
            </div>
        )
    }
}
