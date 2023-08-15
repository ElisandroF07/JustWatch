"use client" 

import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel-react'
import { CardMovie } from '@/components/cardMovie'

interface IProps {
    topRated: []
}

export const SecondSwiper = (props: IProps) => {

    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}  >
            <div className="embla__container">
                {
                    props.topRated.slice(12, 24).map((movie, index)=>{
                        return (
                            <div className="embla__slide" key={index}>
                                <CardMovie number={index + 1} image={"https://image.tmdb.org/t/p/original/" + movie.poster_path} link={"/watch/" + movie.id} /> 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
