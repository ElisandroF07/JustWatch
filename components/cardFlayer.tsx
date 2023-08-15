import Image from 'next/image'
import { FaCircleInfo } from 'react-icons/fa6' 
import imbd from '@/assets/images/IMDB.webp'
import Link from 'next/link'

interface IProps {
    backgroundImage: string,
    frontImage: string,
    title: string,
    description: string,
    votes: number,
    classification: number,
    link: string
}

export const CardFlayer = (props: IProps) => {
  return (
    <Link href={props.link} className='w-full h-full dark flex items-center justify-center gap-8 p-16 relative' style={{ backgroundImage:`url(${props.backgroundImage})`, backgroundSize: 'cover' }}>
      <div className='w-1/4 h-full flex items-center justify-end z-30'>
        <Image className='front rounded-md z-30' src={props.frontImage} width={180} height={256} placeholder='blur' blurDataURL={props.frontImage} alt="image"/>
      </div>
      <div className='flex flex-col gap-4 z-30'>
        <h1 className='text-gray-300 mini'>{props.title}</h1>
        <div className='pmini font-semibold flex items-center justify-start gap-2'><Image className='w-6 h-4' src={imbd} alt="img" /><p>{props.classification} ({props.votes}K)</p></div>
        <p className='pmini'> {props.description} </p>
        <button className='bg-yellow-500 flex items-center w-max justify-center gap-2 py-2 px-2 font-semibold rounded-md'><FaCircleInfo className='text-black'/> Mais informações</button>
      </div>
      <div className="cap z-0 absolute w-full h-full top-0 left-0"></div>
    </Link>
  )
}
