import React from 'react';
import styles from './codeshow.module.scss';
import {atomOneDark, CopyBlock, dracula} from "react-code-blocks";

function CodeShowSection(props) {
    return (
        <div className={styles.container}>
            <div className={styles.codeContainer}>
                <CopyBlock text={"print('Hello World')\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')" +
                    "\n print('Hello World')"}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={dracula}
                />
            </div>
        </div>
    );
}

export default CodeShowSection;