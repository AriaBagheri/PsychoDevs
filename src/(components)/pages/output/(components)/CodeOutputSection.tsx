import React from 'react';
import styles from './codeoutput.module.scss';

function CodeOutputSection({code}) {
    return (
        <div className={styles.container}>
            <div dangerouslySetInnerHTML={{__html: code}} />
        </div>
    );
}

export default CodeOutputSection;