import {KEY_PRESS} from "../constants";
const initial = `
# hello Welcome to my React Markdown Previewer!

## heading 2
### Heading 3

**bold** 
\n
_italic_  

`;

export const markdownReducer = (state = initial, action) => {
    switch (action.type) {
        case KEY_PRESS:
            return action.value
        default:
            return state;
    }
} 