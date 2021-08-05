// import React from "react";
import "./quote.css";

// const quote = () => {
//   return (
//     <div className="QuoteContainer">
//       <h3 className="QuoteText">
//         "This will be a quote that people will see and we can do x y z this will
//         be new"
//       </h3>
//       <p className="QuoteAuthor">- A great author</p>
//     </div>
//   );
// };

// export default quote;

import React, { Component } from "react";

export default class quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteData: [],
      quoteText: "",
      quoteAuthor: "",
    };
    this.randomQuote = this.randomQuote.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const API =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/";
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            quoteData: data.quotes,
          },
          () => {
            // add handle click function here, so that a random quote in shown on initial load
            const oneRandomQuote = this.randomQuote();
            this.setState({
              quote: oneRandomQuote.quote,
              author: oneRandomQuote.author,
            });
          }
        );
      })
      .catch((error) => console.log("Error", error));
    // remove randomQuote() call from here, there is no use of that call here.
  }

  randomQuote() {
    const randomNumber = Math.floor(
      Math.random() * this.state.quoteData.length
    );
    return this.state.quoteData[randomNumber];
  }

  // handleClick() {
  //   const oneRandomQuote = this.randomQuote();
  //   this.setState({
  //     quote: oneRandomQuote.quote,
  //     author: oneRandomQuote.author,
  //   });
  // }

  render() {
    return (
          <div className="QuoteContainer">
            <h3 className="QuoteText">
            " {this.state.quote} "
            </h3>
            <p className="QuoteAuthor">- {this.state.author}</p>
          </div>
        );
  }
}
