import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../images/logos/logos_transparent.png'
import global from '../images/global.svg'
import safe from '../images/safe.svg'
import easy from '../images/easy.svg'
import hedera from '../images/hedera.svg'
import charity from '../images/charity.svg'

const Info = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 1,
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.75 } }
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.75 } }
    }

    const infoItem = {
        hidden: { scale: 1 },
        show: {
            scale: 1.1,
            transition: {
                repeat: Infinity,
                duration: 5,
                repeatType: 'reverse'
            }
        }
    }

    return (
        <>
            {/* LANDING PAGE: WHAT IS HASHRAFFLE? */}
            <motion.div
                variants={container}
                initial='hidden'
                animate='show'
                className='info-landing'
            >
                <div className='question-container'>
                    <motion.div
                        variants={item}
                    >
                        <h1>What is</h1>
                    </motion.div>

                    <motion.div
                        variants={item}
                    >
                        <div className="logo-container">
                            <Image src={logo} alt="logo" layout="responsive" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}
                    >
                        <h1>?</h1>
                    </motion.div>
                </div>


                <motion.div
                    variants={item}
                    className='brief'
                >
                    <h2>It&apos;s the world&apos;s first <i>inter-continental lottery.</i></h2>
                    <h2>Powered by Hedera Hashgraph.</h2>
                    <Image src={hedera} alt='Hedera Hashgraph Lottery' width={50} height={50}></Image>
                </motion.div>


                {/* ANIMATE SO 3X PICS ENTER AFTER SECTION ABOVE */}
                <motion.div variants={fadeIn}>
                    <motion.div
                        variants={container}
                        initial='hidden'
                        animate='show'
                        className='info-about'
                    >

                        <motion.div className='info-item' variants={infoItem} >
                            <h3>Global</h3>
                            <Image src={global} alt='global' layout='responsive' />
                            <p>Utilizing advanced cryptocurrency technology, you can play and win anywhere around the globe!</p>
                        </motion.div>

                        <motion.div className='info-item' variants={infoItem} >
                            <h3>Charitable</h3>
                            <Image src={charity} alt='Charity' layout='responsive' />
                            <p>50% of the money from lottery tickets is donated to a cause which gets voted for by the players!</p>
                        </motion.div>

                        <motion.div className='info-item' variants={infoItem} >
                            <h3>Secure</h3>
                            <Image src={safe} alt='safe' layout='responsive' />
                            <p>Lottery tickets are minted as NFTs, so it is impossible to cheat or fraud. Also, no personal details are required.</p>
                        </motion.div>

                        <motion.div className='info-item' variants={infoItem} >
                            <h3>Easy</h3>
                            <Image src={easy} alt='easy' layout='responsive' />
                            <p>Just connect your HBAR wallet and enter; no login or anything is required. We believe in decentralization!</p>
                        </motion.div>

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

                    </motion.div>


                </motion.div>
            </motion.div>
        </>
    )
}

export default Info