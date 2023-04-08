import React, {useEffect, useState} from 'react';
import PromptSection from "@/(components)/pages/output/(components)/PromptSection";
import SplitScreen from "@/(components)/pages/output/(components)/SplitScreen";
import SplitScreenOther from "@/(components)/pages/output/(components)/SplitScreenOther";
import ImageScreen from "@/(components)/pages/output/(components)/ImageScreen";
import axios from "axios";

enum ResponseTypes {
    NONE,
    IMAGE,
    CODE,
    OTHER
}

function OutputPage({prompt, onGoBack}: any) {

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
    const [response, setResponse] = useState('<button/>');
    const [responseType, setResponseType] = useState(ResponseTypes.NONE);

    useEffect(()=>{
        axios.post("/api/onPromptInput", {
            prompt: prompt
        }).then(r => {
            if (r.data.action.toLowerCase() == "draw"){
                setResponseType(ResponseTypes.IMAGE);
                setResponse(r.data.result.map(i => i.url));
            } else if (r.data.action.toLowerCase() == "code" && !prompt.includes("Analyze")){
                setResponseType(ResponseTypes.CODE);
                let response = r.data.result;
                response = response.replaceAll("```html", "");
                response = response.replaceAll("```", "");
                setResponse(response);

            } else {
                setResponseType(ResponseTypes.OTHER);
            setResponse(r.data.result);
            }
        })
    }, []);

    return (
        <>
            <PromptSection prompt={prompt} onGoBack={onGoBack}/>
            {
                responseType == ResponseTypes.CODE && (
                    <SplitScreen code={response}/>
                )
            }
            {
                responseType == ResponseTypes.IMAGE && (
                    <ImageScreen images={response as any}/>
                )
            }
            {
                responseType == ResponseTypes.OTHER && (
                    <SplitScreenOther response={response}/>
                )
            }

        </>
    );
}

export default OutputPage;