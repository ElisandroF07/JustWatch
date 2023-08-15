import Image, { StaticImageData } from 'next/image'

interface IProps {
    image: StaticImageData,
    title: string,
    subtitle: string,
    description: string
}

export const CardBanner = (props:IProps) => {
  return (
    <div className="card animation animDownS" data-animation="down">
        <Image src={props.image} alt="img" className="max-w-full"/>
        <h2 className="text-subtitle pt-4 font-medium">{props.subtitle.toLocaleUpperCase()}</h2>
        <h1 className="font-semibold text-gray-300 text-xl text-center text-2xl text-center mt-4">{props.title}</h1>
        <p className="text-gray-300 text-center mt-4">{props.description}</p>
    </div>
  )
}