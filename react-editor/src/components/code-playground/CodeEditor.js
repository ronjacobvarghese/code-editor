import { Fragment } from 'react';
// import { Controlled as ControlledEditor } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/css/css';

import FileSelector from './FileSelector';
import styles from './CodeEditor.module.css';


export default function CodeEditor(props){

    const { language, onChange, value } = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return <Fragment>
        <div className = {styles['code-editor-container']}>
            <FileSelector/>
            {/* <ControlledEditor
                onBeforeChange = {handleChange}
                value = {value}
                className = "code-mirror-wrapper"
                options = {{
                    lineWrapping:true,
                    lint: true,
                    theme: 'material',
                    mode: language
                }}
            /> */}
        </div>
    </Fragment>}