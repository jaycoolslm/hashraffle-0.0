import React, { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"

import Charity from "../components/Charity"
import Navbar from "../components/Navbar"
import PrizeWin from "../components/PrizeWin"

import logo from '../images/logos/logos_transparent.png'

export default function Home() {

  return (
    <>

      <div className="landing">
        <Navbar></Navbar>
        <div className="logo-container">
          <Image src={logo} alt="logo" layout="responsive" />
        </div>
        <h1>The Decentralized Lottery</h1>

        <div className="gooey-btn">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
              </filter>
            </defs>
          </svg>

          <Link href='/play'>
            <a id="gooey-button">
              PLAY
              <span className="bubbles">
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
              </span>
            </a>
          </Link>
        </div>

        <div className="sub-container">
          <div>
            <h2>50% to winners.</h2>
            <div className="svg-container">
              <PrizeWin />
            </div>
          </div>
          <div>
            <h2>50% to charity.</h2>

            <div className="svg-container">
              <Charity />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

