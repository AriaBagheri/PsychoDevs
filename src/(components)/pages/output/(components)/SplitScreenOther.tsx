import React from 'react';
import {inspect} from "util";
import styles from './splitscreen.module.scss'
import CodeShowSection from "@/(components)/pages/output/(components)/CodeShowSection";
import CodeOutputSection from "@/(components)/pages/output/(components)/CodeOutputSection";

function SplitScreenOther({response}) {
    return (
        <div className={styles.container}>
            <p style={{
                marginInline: "10vw",
                marginBlock: "20px",
                color: "whitesmoke",
                lineHeight: 2,
                textAlign: "justify"
            }} dangerouslySetInnerHTML={{__html: response}}/>
        </div>
    );
}

export default SplitScreenOther;