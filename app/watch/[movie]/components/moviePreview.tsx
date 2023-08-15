"use client"
import { FaPlay } from "react-icons/fa6"

interface IProps {
    videoPath: string,
    backdropPath: string
}

function handleClick() {
    document.querySelector('.moviePreview').style.display = "initial"
    document.querySelector('.cont').style.transform = "translateY(0px)"
}

export const MoviePreview = (props : IProps) => {
  return (
    <div>
        <div className='flex items-center justify-center w-full h-96 movback relative' style={{backgroundImage: 'url(https://image.tmdb.org/t/p/original'+ props.backdropPath +'?controls=0 )'}}>
            <iframe className="moviePreview transition-opacity duration-300" src={props.videoPath} title="YouTube video player" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="bg-gray-800 px-4 py-2 rounded-md" onClick={()=> handleClick()}>
                <FaPlay className="text-yellow-500 w-7 h-7 "/>
            </div>
            <div className='fade w-full h-28 bottom-0 left-0 absolute'></div>
        </div>
    </div>
  )
}
