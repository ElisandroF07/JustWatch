import Image from "next/image"
import logo from '../assets/images/JustWatch-logo-large.webp'

export const WatchHeader = () => {
  return (
    <nav className="w-full h-max flex items-center justify-between z-3 py-2 px-16" style={{backgroundColor: 'var(--ion-background-color)'}}>
      <Image src={logo} alt="logo" className="w-32 z-30"/>
      <div className="nav flex items-center justify-center gap-6 z-30">
        <ul className="flex gap-6 text-sm">
          <li><a className="text-gray-400 text-md hover:text-white transition-colors duration-300" href="/">Home</a></li>
          <li><a className="text-gray-400 text-md hover:text-white transition-colors duration-300" href="#">Lançamentos</a></li>
          <li><a className="text-gray-400 text-md hover:text-white transition-colors duration-300" href="#">Populares</a></li>
          <li><a className="text-gray-400 text-md hover:text-white transition-colors duration-300" href="#">Watchlist</a></li>
        </ul>
        <div className="searchBox flex items-center justify-center z-30">
          <button className="w-12 bg-gray-primary Wbutton p-2 rounded-tl-md rounded-bl-md flex items-center justify-center"></button>
          <input type="text" placeholder="Busca por filmes ou séries" className="Wsearch text-sm rounded-tr-md rounded-br-md bg-gray-primary pr-4 text-md text-gray-300"/>
          <button className="Wbutton text-sm w-max bg-gray-800 hover:bg-gray-700 transition-colors duration-300 w-max text-gray-200 pl-3 pr-3 ml-4 rounded-md">Sign In</button>
        <div className="hamburger flex items-center justify-center flex-col gap-1 ml-4">
            <span className="w-6 rounded bg-gray-400"></span>
            <span className="w-6 rounded bg-gray-400"></span>
            <span className="w-6 rounded bg-gray-400"></span>
        </div>
        </div>
      </div>
    </nav>
  )
}
