import {combineReducers } from 'redux';
import {quotesReducers} from './QuotesMachineReducer';
import {markdownReducer} from './MarkdownReducer';

export const rootReducer = combineReducers({quotesReducers,markdownReducer});

