import React, { Component } from 'react'
import { fetchSingleQuote } from '../service/apiclient';
import {Link} from 'react-router-dom';

export default class QuoteDetails extends Component {
    state = {quote: null}
    componentDidMount() {
        const id = this.props.match.params.id;
        fetchSingleQuote(id).then(quote=> {
            this.setState({quote});
        })
    }

    render() {
        if (!this.state.quote) {
            return <p>Loading...</p>
        }
        const {id, quotetext, author, history} = this.state.quote;
        return (
            <div>
            <h1>Quote #{id}</h1>
            <h3>Details</h3>
            <div>
                <p className="quotetext">{quotetext}</p>
                <p className="author">{author}</p>
            </div>
            <hr/>
            <h3>History</h3>
            <ul>
                {history.sort((q1, q2)=>q2.time-q1.time).map((q) => {
                    return <div className="quotehistory" key={q.time}>
                        <p>Time: {new Date(q.time).toISOString()}</p>
                        <p>Quotetext: {q.quotetext}</p>
                        <p>Author: {q.author}</p>
                    </div>
                })}
            </ul>
            <hr/>
            <Link to="/quotes">Back to all quotes</Link>
            </div>
        )
    }
}
