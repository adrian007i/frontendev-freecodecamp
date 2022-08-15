import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes, selectQuote } from '../actions/QuoteMachineAction';
import "../css/QuoteMachine.css"

// maps the search field to the properties of the component
const mapStateToProps = state => {
    return {
        text: state.quotesReducers.text,
        author: state.quotesReducers.author,
        quotes: state.quotesReducers.quotes
    }
}

// allows us to use the onSearchChange function
const matchDispatchToProps = dispatch => ({
    onFetchQuotes: () => dispatch(fetchQuotes()),
    onSelectQuote: () => dispatch(selectQuote())
});

const QuoteMachine = (props) => {

    const { onFetchQuotes, onSelectQuote, text, author } = props;


    useEffect(() => {
        onFetchQuotes();
    }, []);

    return (
        <div className="app_block">
            <div id="quote-box" className="inner_app">
                <div id="text">
                    {text}
                </div>
                <div id="author">
                    <div>{author}</div>
                </div>
                <div>
                    <button className="btn" id="new-quote" onClick={() => onSelectQuote()}>New Quote</button>
                    <a className="btn" id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
                </div>
            </div>

        </div>
    )
}
export default connect(mapStateToProps, matchDispatchToProps)(QuoteMachine);