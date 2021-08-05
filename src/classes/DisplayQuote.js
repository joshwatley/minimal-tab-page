import React from 'react'

function DisplayQuote(props) {
    const { quote, generateRandomQuote } = props;
    return (
        <div className="card" >

            <div className="card-body">
                <p className="card-text">{quote.quote}</p>
                <h5 className="card-title">- {quote.author}</h5>
                <button
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate Quote</button>
            </div>
        </div>
    )
}

export default DisplayQuote
