import React from 'react';
import styles from './codeoutput.module.scss';

function CodeOutputSection(props) {
    function createMarkup() {
        return {__html: '<button style="color: red">Hello</button>'};
    }

    return (
        <div className={styles.container}>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
    );
}

export default CodeOutputSection;