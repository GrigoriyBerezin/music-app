import React from 'react'
import {Hero, LayOutSidebar, New, Recommand, Treading} from "../router";

export const Home = () => {
  return (
    <>
      <Hero/>
      <LayOutSidebar>
        <Treading/>
        <New/>
        <Recommand/>
      </LayOutSidebar>
    </>
  )
}
