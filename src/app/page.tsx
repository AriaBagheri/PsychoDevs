'use client';
import {useState} from "react";
import HomePage from "@/(components)/pages/home/HomePage";
import OutputPage from "@/(components)/pages/output/OutputPage";

enum PAGES {
    HOME_PAGE,
    OUTPUT_PAGE
}

export default function Home() {
    const [page, setPage] = useState<PAGES>(PAGES.HOME_PAGE)
    const [prompt, setPrompt] = useState("");

    return (
        <>
            {
                page == PAGES.HOME_PAGE && (
                    <HomePage defaultPrompt={prompt} onSubmit={(pr) => {
                        setPage(PAGES.OUTPUT_PAGE);
                        setPrompt(pr);
                    }}/>
                )
            }

            {
                page == PAGES.OUTPUT_PAGE && (
                    <OutputPage prompt={prompt}
                                onGoBack={() => {
                                    setPage(PAGES.HOME_PAGE);
                                }}/>
                )
            }
        </>
    )
}
