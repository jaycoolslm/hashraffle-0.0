import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import RaffleModal from '../components/RaffleModal';

import ReactFullpage from '@fullpage/react-fullpage';
import Image from 'next/image';
import { connectHashpack, joinRaffle } from '../helpers/hashconnect'

import one from '../images/one.svg'
import two from '../images/two.svg'
import three from '../images/three.svg'
import tiktok from '../images/tiktok.svg'
import instagram from '../images/instagram.svg'
import wallet from '../images/wallet.png'
import smartcontract from '../images/smartcontract.png'
import prize from '../images/prize.png'


const Play = () => {

  const [currentPlayers, setCurrentPlayers] = useState(0)
  const [lastWinner, setLastWinner] = useState('')

  useEffect(() => {
    fetch('/api/players')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCurrentPlayers(data.players)
        setLastWinner(data.lastWinner)
      })
  }, [])

  return (
    <ReactFullpage
      licenseKey='C4156E96-167848AC-A2DB7FDD-7915B4B8'
      render={({ fullpageApi }) =>
      (
        <ReactFullpage.Wrapper>
          <div className='section one'>
            <Navbar />
            <div className='left-section ls-one'>
              <RaffleModal
                players={currentPlayers}
                lastWinner={lastWinner}
              />

              {/* <button onClick={() => fullpageApi.moveSectionDown()}>CLick me</button> */}
              <Image src={one} alt='one' width={75} height={75} />
              <h1>Connect your wallet</h1>
              <div>
                <p>At the moment, the only wallet supported is <a target='_blank' rel="noreferrer" href='https://www.hashpack.app/' className='a-one'>HashPack</a></p>
                <br />
                <p>Check out our tutorial on <a href='https://www.tiktok.com/@hashraffle' className='a-one'>how to connect</a>. You must be on computer</p>
              </div>
              <button className='play-btn one-btn' onClick={() => {
                connectHashpack()
                fullpageApi.moveSectionDown()

              }}>Connect</button>
            </div>

            <div className='right-section'>
              <Image src={wallet} layout='responsive' />
            </div>

          </div>

          <div className='section two'>

            <div className='left-section'>
              <RaffleModal
                players={currentPlayers}
                lastWinner={lastWinner}
              />

              <Image src={two} alt='one' width={75} height={75} />
              <h1>Buy your raffle ticket</h1>
              <div>
                <p>The raffle <span className='a-two'>entry is 1 HBAR.</span> The HBAR is <span className='a-two'>sent to a smart contract</span> which will then randomly select a winner once 3 participants have entered</p>
                <br />
                <p>Here is <a target='_blank' rel="noreferrer" href="https://medium.com/@polysvote/smart-contracts-for-dummies-e8f332275c56" className='a-two'>more information</a> on why smart contracts are great for raffles.</p>
              </div>
              <button className='play-btn two-btn' onClick={async () => {

                const result = await joinRaffle()

                if (result) {
                  let body = {
                    success: true
                  }

                  body = JSON.stringify(body)

                  const res = await fetch('/api/hello', {
                    method: 'POST',
                    body: body
                  })

                  const data = await res.json()
                  setCurrentPlayers(data)

                } else {
                  alert('Join raffle unsuccessful')
                }

                fullpageApi.moveSectionDown()
              }}>Buy</button>
            </div>

            <div className='right-section'>
              <Image src={smartcontract} layout='responsive' />
            </div>

          </div>

          <div className='section three'>

            <div className='left-section'>
              <RaffleModal
                players={currentPlayers}
                lastWinner={lastWinner}
              />
              <Image src={three} alt='one' width={75} height={75} />
              <h1>Wait for reward</h1>
              <div className='relative-div'>
                <p>The <span className="a-three">winner</span> is <span className="a-three">automatically awarded</span> once there are <span className="a-three">three participants</span></p>
                <br />
                <p>Current number of participants: {currentPlayers} </p>

                <a className='social-image ig' href='https://www.instagram.com/hash_raffle/'>
                  <Image src={instagram} height={50} width={50} />
                </a>

                <a className='social-image tik' href='https://www.tiktok.com/@hashraffle'>
                  <Image src={tiktok} height={50} width={50} />
                </a>
              </div>

            </div>

            <div className='right-section'>
              <Image src={prize} layout='responsive' />
            </div>
          </div>
        </ReactFullpage.Wrapper>
      )
      }
    />
  )
}

export default Play

