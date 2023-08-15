import Image, { StaticImageData } from 'next/image'
import imgTeste from '@/assets/images/img2.webp'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'

interface IProps {
    number: number,
    title: string,
    image: string | StaticImageData,
    status: string | number
}

export const ChartItemUp = (props : IProps) => {
  return (
    <li className="flex items-center justify-start h-max relative"> <span className="text-gray-700 font-bold z-10 text-7xl">{props.number}</span> <Image src={props.image} alt="img" width="48" height="68"/> <p className="ml-4 text-gray-700 font-semibold text-sm">{props.title}</p> <div className="flex items-center absolute right-0"> <p className="text-gray-700">{props.status}</p> <FaArrowUp className="text-green-600 ml-3" /> </div> </li>
  )
}
