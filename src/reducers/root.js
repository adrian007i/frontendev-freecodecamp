import {combineReducers } from 'redux';
import {quotesReducers} from './QuotesMachineReducer';

export const rootReducer = combineReducers({quotesReducers});

