import {combineReducers } from 'redux';
import {quotesReducers} from './QuotesMachineReducer';
import {markdownReducer} from './MarkdownReducer';
import {calculatorReducer} from './CalculatorReducer';
import { clockReducer } from './ClockReducer';

export const rootReducer = combineReducers({quotesReducers,markdownReducer,calculatorReducer, clockReducer});

