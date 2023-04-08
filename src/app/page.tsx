import Image from 'next/image'
import styles from './page.module.css'
'use client'
import {useState} from "react";
import HomePage from "@/(components)/pages/home/HomePage";
import OutputPage from "@/(components)/pages/output/OutputPage";

enum PAGES {
  HOME_PAGE,
  OUTPUT_PAGE
}

export default function Home() {

  const [page, setPage] = useState<PAGES>(PAGES.OUTPUT_PAGE)

  return (
    <>
      {
        page == PAGES.HOME_PAGE && (
            <HomePage onSubmit={()=>{
              setPage(PAGES.OUTPUT_PAGE);
            }}/>
          )
      }

      {
          page == PAGES.OUTPUT_PAGE && (
            <OutputPage onSubmit={()=>{
              setPage(PAGES.HOME_PAGE);
            }}/>
          )
      }
    </>
  )
}
