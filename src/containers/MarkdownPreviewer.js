import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import {keyPressed} from "../actions/MarkdownAction";
import "../css/MarkdownPreviewer.css";

// maps the search field to the properties of the component
const mapStateToProps = state => ({
    raw: state.markdownReducer
});

// allows us to use the onSearchChange function
const matchDispatchToProps = dispatch => ({
    onKeyPressed: (event) => dispatch(keyPressed(event.target.value)), 
});

const MarkdownPreviewer = (props) => { 

    const {raw, onKeyPressed} = props;

    return (
        <div className="app_block">
            <div id="markdown_box"> 
                <div id="editor_box">
                    <textarea id="editor" onChange={onKeyPressed} placeholder="Type Here"></textarea>
                </div>
                <div id="preview">
                <ReactMarkdown children={raw}></ReactMarkdown>
                </div>
            </div>
        </div>

    )
}

export default connect(mapStateToProps, matchDispatchToProps)(MarkdownPreviewer);