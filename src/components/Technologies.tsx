import React from 'react'
import { GiTBrick, GiTRexSkull } from 'react-icons/gi'
import { RiNextjsFill, RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiSass, SiTypescript } from 'react-icons/si'

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine  className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript  className="text-7xl text-blue-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsFill  className="text-7xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill  className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSass  className="text-7xl text-rose-700" />
                </div>
            </div>
        </div>
    )
}

export default Technologies
