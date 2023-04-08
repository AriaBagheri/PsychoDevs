import React from 'react';
import styles from './codeshow.module.scss';
import {atomOneDark, CopyBlock, dracula} from "react-code-blocks";

function CodeShowSection({code}: any) {
    return (
        <div className={styles.container}>
            <div className={styles.codeContainer}>
                <CopyBlock text={code}
                    language='html'
                    showLineNumbers='true'
                    wrapLines
                    theme={dracula}
                />
            </div>
        </div>
    );
}

export default CodeShowSection;