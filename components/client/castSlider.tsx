"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'

interface IProps {
    credits: []
}

export const CastSlider = (props : IProps) => {

    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla castSlider" ref={emblaRef}  >
            <ul className="embla__container w-full">
                {
                    props.credits.map((person, index)=>{
                        return (
                            <li className="embla__slide mr-2" key={index}>
                                <h1><Link href="#" className='text-blue-300 text-sm'>{person.original_name}</Link></h1>
                                <p className='text-gray-300 font-semibold text-sm'>{person.character}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
  )
}