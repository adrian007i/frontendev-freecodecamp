import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';

// maps the search field to the properties of the component
const mapStateToProps = state => {
    return {
        text: state.text,
        author: state.author,
        quotes: state.quotes
    }
}

// allows us to use the onSearchChange function
const matchDispatchToProps = dispatch => ({
    onFetchQuotes: () => dispatch(fetchQuotes())
});

const QuoteMachine = (props) => {

    const {onFetchQuotes} = props;

    useEffect(()=>{
        onFetchQuotes()
    }, [])

    return (
        <div className="app_block">
            <div id="quote-box" className="inner_app">
                <div id="text">
                    Life is what you make it.
                </div>
                <div id="author">
                    <div>Adrian John</div>
                </div>
            </div>
            <div>
                <button className="btn" id="newQuote">New Quote</button>
                <a className="btn" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, matchDispatchToProps)(QuoteMachine);