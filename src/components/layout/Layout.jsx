import React from "react"
import {Header} from "../header/Header"
import {Footer} from "../../router";

export const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main className='mt-[4%]'>{children}</main>
      <Footer/>
    </>
  )
}
