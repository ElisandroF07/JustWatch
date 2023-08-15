import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface IProps {
    number: number,
    image: string,
    link: string
}

export const CardMovie = (props:IProps) => {
    return (
      <Link href={props.link} className='flex' data-animation="left">
          <h1 className='text-gray-300 font-bold z-10 number translate-x-6 translate-y-10'>{props.number}</h1>
          <Image className='ima z-20  rounded-md' src={props.image} width={190} height={270} alt="img"/>
      </Link>
    )
  }
  