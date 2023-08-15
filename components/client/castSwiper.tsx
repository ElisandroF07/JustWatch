"use client" 

import useEmblaCarousel from 'embla-carousel-react'
import { CardMovieSFF } from '@/components/cardMovieSFF'

interface IProps {
    upCommingMovies: []
}

export const CastSwiper = (props: IProps) => {

    const [emblaRef] = useEmblaCarousel()

    return ( 
        <div className="emblaC" ref={emblaRef}  >
            <div className="embla__containerC">
                {
                    props.upCommingMovies.slice(12, 24).map((movie, index)=>{
                        return (
                            <div className="embla__slideC" key={index}>
                                <CardMovieSFF image={"https://image.tmdb.org/t/p/original/" + movie.poster_path} link={"/watch/" + movie.id} /> 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
