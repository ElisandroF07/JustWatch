import Image from 'next/image'
import React from 'react'
import eu from '@/assets/images/eu.png'
import ce from '@/assets/images/ce.png'

export const Footer = () => {
  return (
    <footer className="mt-24 flex items-center justify-center w-full p-12">
        <div className="w-4/6 flex items-center justify-center">
            <p className="text-gray-300">© 2023 JustWatch - Il motore di ricerca streaming - - All external content remains the property of the rightful owner. Imprint · Privacy Policy</p>
        </div>
        <div className="flex w-2/6 items-center justify-center">
            <Image className="w-40 h-10" src={eu} alt="Image" />
            <Image className="w-28 h-10" src={ce} alt="imImage" />
        </div>
    </footer>
  )
}
