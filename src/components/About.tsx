import { ABOUT_TEXT } from "@/constants"
import aboutImg from "../assets/about.jpg"

import React from 'react'

const About = () => {
    return (
        <div className="border-b border-neutral-900 b4-4">
            <h2 className="my-20 text-center text-4xl">Sobre
                <span className="text-neutral-500">{" "}Italo</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl w-96" src={aboutImg.src} alt="" />
                    </div>                   
                </div>
                <div className="w-full lg:w-1/2">
                        <div className="flex jusitfy-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About
