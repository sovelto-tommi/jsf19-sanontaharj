import React, { Component } from 'react'

export default class Quote extends Component {
    render() {
        const {id, author, quotetext} = this.props.quote;
        return (
            <div className="Quote">
                <span className="quoteid">{id}</span>
                <p className="quotetext">{quotetext}</p>
                <p className="author">{author}</p>
            </div>
        )
    }
}
