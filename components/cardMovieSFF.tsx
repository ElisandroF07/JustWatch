import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface IProps {
    image: string,
    link: string
}

export const CardMovieSFF = (props:IProps) => {
    return (
      <Link href={props.link} data-animation="left">
          <Image className='ima z-20  rounded-md' src={props.image} width={190} height={270} alt="img"/>
      </Link>
    )
  }
  