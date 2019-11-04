import React, { Component } from 'react'
import QuoteList from './QuoteList'

export default class QuoteBox extends Component {
    render() {
        return (
            <div>
                <QuoteList quotes={quotearray}/>
            </div>
        )
    }
}

const quotearray =
    [
        {
        "id": 1,
        "author": "Benjamin Franklin",
        "quotetext": "An investment in knowledge pays the best interest."
    },
        {
            "id": 2,
            "author": "Herbert Spencer",
            "quotetext": "The great aim of education is not knowledge but action."
        },
        {
            "id": 3,
            "author": "Nelson Mandela",
            "quotetext": "Education is the most powerful weapon which you can use to change the world."
        },
        {
            "id": 4,
            "author": "Mark Twain",
            "quotetext": "Don't let schooling interfere with your education."
        },
        {
            "id": 5,
            "author": "Albert Einstein",
            "quotetext": "The difference between stupidity and genius is that genius has its limits."
        },
        {
            "id": 6,
            "author": "Leonardo da Vinci",
            "quotetext": "Poor is the pupil who does not surpass his master."
        },
        {
            "id": 7,
            "author": "Douglas Adams",
            "quotetext": "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."
        },
        {
            "id": 8,
            "author": "Adam Osborne",
            "quotetext": "People think computers will keep them from making mistakes. They're wrong. With computers you make mistakes faster."
        },
        {
            "id": 9,
            "author": "Arthur C. Clarke",
            "quotetext": "Any sufficiently advanced technology is indistinguishable from magic."
        },
        {
            "id": 10,
            "author": "Jamie Zawinski",
            "quotetext": "Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer."
        },
        {
            "id": 11,
            "author": "Yoda",
            "quotetext": "Do, or do not. There is no 'try'."
        },
        {
            "id": 12,
            "author": "Bjarne Stroustrup",
            "quotetext": "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg."
        },
        {
            "id": 13,
            "author": "Albert Einstein",
            "quotetext": "Make everything as simple as possible, but not simpler."
        },
        {
            "id": 14,
            "author": "Wilson Mizner",
            "quotetext": "Copy from one, it's plagiarism; copy from two, it's research."
        },
        {
            "id": 15,
            "author": "Slartibartfast",
            "quotetext": "Science has achieved some wonderful things of course, but I'd far rather be happy than right any day."
        }
    ];
