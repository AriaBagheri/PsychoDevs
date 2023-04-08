import React, {useState} from 'react';
import ButtonComponent from "@/(components)/ButtonComponent";
import Link from "next/link";
import LinkComponent from "@/(components)/LinkComponent";
import PromptSection from "@/(components)/pages/output/(components)/PromptSection";
import SplitScreen from "@/(components)/pages/output/(components)/SplitScreen";

function OutputPage(props) {
    const [template, setTemplate] = useState({
        button: {
            text: "Hello World",
            fontSize: "20px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "0px",
            cursor: "pointer",
            padding: "15px",
            margin: "15px",
            border: "none",
            outline: "none"
        },
        link: {
            text: "This a link",
            fontSize: "20px",
            color: "black",
            cursor: "pointer",
            textDecoration: "none"
        }
    });
    return (
        <>
            {/*<ButtonComponent style={{*/}
            {/*    ...template.button*/}
            {/*}} text={template.button.text}/>*/}

            {/*<LinkComponent  style={{*/}
            {/*    ...template.link*/}
            {/*}} text={template.link.text}/>*/}
            <PromptSection/>
            <SplitScreen/>
        </>
    );
}

export default OutputPage;