import { useState } from "react";

function QuoteCard() {

  const quotes = [
    "Success is the sum of small efforts repeated every day.",
    "Dream big. Start small.",
    "Stay focused and never give up.",
    "Consistency beats motivation.",
    "One study session at a time."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  return (
    <div className="card shadow rounded-4 border-0">

      <div className="card-body">

        <h4>💬 Quote of the Day</h4>

        <blockquote className="blockquote mt-3">
          "{quote}"
        </blockquote>

        <button
          className="btn btn-outline-dark mt-3"
          onClick={() =>
            setQuote(
              quotes[Math.floor(Math.random() * quotes.length)]
            )
          }
        >
          New Quote
        </button>

      </div>

    </div>
  );
}

export default QuoteCard;