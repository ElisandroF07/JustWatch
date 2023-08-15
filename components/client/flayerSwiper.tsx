"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { CardFlayer } from '@/components/cardFlayer'

interface IProps {
    movies: []
}

export const FlayerSwiper = (props: IProps) => {

    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla serie rounded-xl animation animDownS" data-animation="down" ref={emblaRef}  >
            <div className="embla__container">
                {
                    props.movies.slice(4, 10).map((movie, index)=>{
                        return (
                            <div className="embla__slidee serie" key={index}>
                                <CardFlayer backgroundImage={"https://image.tmdb.org/t/p/original/"+movie.backdrop_path} frontImage={"https://image.tmdb.org/t/p/original/"+movie.poster_path} classification={movie.vote_average} description={movie.overview} title={movie.original_title} votes={movie.vote_count} key={index} link={"/watch/" + movie.id}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
