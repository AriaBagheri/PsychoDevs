import React from 'react';
import styles from './promptsection.module.scss'
import {IoMdArrowRoundBack} from "react-icons/io";

function PromptSection({prompt, onGoBack} :any) {
    return (
        <div className={styles.container}>
            <div className={styles.backContainer} onClick={onGoBack}>
                <IoMdArrowRoundBack/>
                <h2>Go Back</h2>
            </div>

            <h1>Prompt Provided:</h1>
            <p style={{
                color: "whitesmoke"
            }}>
                {prompt.substring(0, 200)}{prompt.length > 200 ? "..." : ""}
            </p>
        </div>
    );
}

export default PromptSection;