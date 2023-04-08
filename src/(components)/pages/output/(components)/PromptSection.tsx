import React from 'react';
import styles from './promptsection.module.scss'
import {IoMdArrowRoundBack, IoReturnDownBackOutline} from "react-icons/all";

function PromptSection(props) {
    return (
        <div className={styles.container}>
            <div className={styles.backContainer}>
                <IoMdArrowRoundBack/>
                <h2>Go Back</h2>
            </div>

            <h1>Prompt Provided:</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo numquam possimus quibusdam, quod
                quos repellat reprehenderit sunt tempora voluptates! Fugit minus mollitia numquam quibusdam voluptate?
                Consequatur debitis officia totam? Animi nisi quia rem veritatis voluptatem voluptatibus.
            </p>
        </div>
    );
}

export default PromptSection;