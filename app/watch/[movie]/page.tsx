import { FaPlay, FaShareNodes, FaFilter, FaBookmark, FaSquareCheck, FaBell } from "react-icons/fa6"
import Image from "next/image"
import imdb from '@/assets/images/IMDB.webp'
import { Lato } from "next/font/google"
import Link from "next/link"
import { ChartItemDown } from "@/components/chartItemDown"
import imgTeste from '@/assets/images/img2.webp'
import { ChartItemUp } from "@/components/chartItemUp"
import justLogo from '@/assets/images/jw-icon-badge.png'
import play from '@/assets/images/justwatch-round-icon-play.svg'
import { CastSlider } from "../../../components/client/castSlider"
import { SecondSwiper } from "@/components/client/secondSwiper"
import axios from "axios"
import { CastSwiper } from "@/components/client/castSwiper"
import { MoviePreview } from "./components/moviePreview"

const lato = Lato({ subsets: ['latin'], weight: ['700'] })

interface IProps {
    params: {
        movie: string
    }
}

export default async function page({params} : IProps) {

    var current: object = {}
    var popularMovies:[] = []
    var upCommingMovies:[] = []
    var similarMovies: [] = []
    var youtubeVideos: [] = []
    var credits: [] = []

   const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {
        method: 'GET',
        headers:  {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
        accept: 'application/json'
        }
    })
    popularMovies = await response.data.results

    const movie = await axios.get("https://api.themoviedb.org/3/movie/" + params.movie + "?language=pt-BR", {
        method: 'GET',
        headers:  {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
        accept: 'application/json'
        }
    })
    current = await movie 

    const upcomming = await axios.get("https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1", {
        method: 'GET',
        headers:  {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
        accept: 'application/json'
        }
    })
    upCommingMovies = await upcomming.data.results

    const similar = await axios.get("https://api.themoviedb.org/3/movie/"+params.movie+"/recommendations?language=en-US&page=1", {
        method: 'GET',
        headers:  {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
        accept: 'application/json'
        }
    })
    similarMovies = await similar.data.results

    const videos = await axios.get("https://api.themoviedb.org/3/movie/"+params.movie+"/videos?language=en-US", {
        method: 'GET',
        headers:  {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
        accept: 'application/json'
        }
    })
    youtubeVideos = await videos.data.results

    const rp = await axios.get("https://api.themoviedb.org/3/movie/"+params.movie+"/credits?language=pt-BR", {
        method: 'GET',
        headers:  {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
        accept: 'application/json'
        }
    })
    credits = await rp.data.cast

    let runtime:string = current.data.runtime + ""
    let hour:string = runtime.substring(0, 1) + "h"
    let minutes = runtime.substring(1, 3) + "mn"
    const convertedRuntime = hour + " " + minutes

    const videoPath1:string = "https://www.youtube.com/embed/" + youtubeVideos[0]?.key
    const videoPath2:string = "https://www.youtube.com/embed/" + youtubeVideos[1]?.key
    const videoPath3:string = "https://www.youtube.com/embed/" + youtubeVideos[2]?.key
    const videoPath4:string = "https://www.youtube.com/embed/" + youtubeVideos[3]?.key 

    return (
        <div>
            <div className={lato.className}>
                <MoviePreview backdropPath={current.data.backdrop_path} videoPath={videoPath1}/>
                <div className='w-full h-max flex items-center justify-center' style={{backgroundColor: 'var(--ion-background-color)'}}>
                    <div className="cont h-full rounded-tl-xl rounded-tr-xl transition-transform duration-300 -translate-y-16 p-6 flex" style={{backgroundColor: 'var(--ion-background-color)'}}>
                        <div className="left">
                            <Image className="moviePoster rounded-tl-md rounded-tr-md" src={"https://image.tmdb.org/t/p/original" + current.data.poster_path} width={310} height={470} alt="image" placeholder="blur" blurDataURL={"https://image.tmdb.org/t/p/original" + current.data.poster_path}/>
                            <div className="w-full rounded-b-md bg-gray-800">
                                <ul className="flex w-full justify-between items-center overflow-hidden">
                                    <li className="p-2 hover:bg-gray-600 rounded-sm flex flex-col gap-1 items-center justify-evenly text-gray-200 text-sm">
                                        <FaBookmark className="w-5 h-5"/>
                                        <p>Watchlist</p>
                                    </li>
                                    <li className="p-2 hover:bg-gray-600 rounded-sm flex flex-col gap-1 items-center justify-evenly text-gray-200 text-sm">
                                        <FaSquareCheck className="w-5 h-5"/>
                                        <p>Visto</p>
                                    </li>
                                    <li className="p-2 hover:bg-gray-600 rounded-sm flex flex-col gap-1 items-center justify-evenly text-gray-200 text-sm">
                                        <FaBookmark className="w-5 h-5"/>
                                        <p>Gostei</p>
                                    </li>
                                    <li className="p-2 hover:bg-gray-600 rounded-sm flex flex-col gap-1 items-center justify-evenly text-gray-200 text-sm">
                                        <FaSquareCheck className="w-5 h-5"/>
                                        <p>Não gostei</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full h-8 rounded-md bg-gray-800 mt-2 flex justify-center items-center text-white py-2">
                                <Link className="text-sm font-semibold" href="/">Faça login</Link><p className="ml-1 text-sm">para sincronizar a Watchlist</p>
                            </div>
                            <div className="w-full bg-gray-800 hr mt-4" />
                            <div>
                                <h1 className="text-sm font-semibold mt-4 mb-2" style={{color: 'var(--ion-color-secondary)'}}>RATING</h1>
                                <div className="flex items-center justify-start">
                                    <svg height="15" viewBox="0 0 28 28" width="15"><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0" stopColor="#fbd446"/><stop offset="1" stopColor="#e2b512"/></linearGradient><path className=" bg-yellow-600 w-2 h-2" d="m0 19.7015845c.00056683-.0736745.00721521-.1234928.00721521-.1234928s.0486242-4.0927864.0072152-5.1262119c-.0417227-1.0328056.88150975-.5424399.88150975-.5424399l5.17926192 2.6467967s1.01263824.4804467-.01756746 1.0033588c-.7604198.3865272-4.1553303 2.1421726-5.17643857 2.6278888-.78350199.3732745-.8790368-.1862574-.88119605-.4659541v-.0199457zm21.2500314-8.8949003s-.0705836-.84310659.6525054-.4764172c.72403.3669993 4.3319457 2.1964167 4.3319457 2.1964167s1.9964156.9810413-.0047055 1.9905995c-1.4151211.7138509-3.5743494 1.8046201-4.3184565 2.1784387-.7444208.3738186-.6669358-.4317822-.6669358-.4317822zm-6.2110368 9.5159455c-1.0207944.4860261-.8742944-.6090825-.8742944-.6090825s.0489379-4.0927863.0075289-5.1265217c-.0420364-1.0334255.8815097-.5421299.8815097-.5421299l5.1786341 2.6464866s1.0132656.4801368-.0175675 1.0036688c-.7594786.3859072-4.1547026 2.1418626-5.1758108 2.6275787zm-7.07027199 3.5171807c-1.02110824.4860262-.87429452-.6100124-.87429452-.6100124s.04862421-4.0927866.00721521-5.1259022c-.0417227-1.0337355.88119602-.5424399.88119602-.5424399l5.17957548 2.6467968s1.0126382.4801368-.0178812 1.0036688c-.760106.3855973-4.15501645 2.1415528-5.17581099 2.6278889zm.00784224-7.1642369c-1.02079455.4857162-.87398082-.6093925-.87398082-.6093925s.0486242-4.0927866.0069015-5.1262121c-.041409-1.03342554.88150973-.5424399.88150973-.5424399l5.17957554 2.6467968s1.0129519.4801368-.0178812 1.0033588c-.7597923.3859073-4.15501649 2.1418627-5.17612475 2.6278889zm7.06399885-3.7003698c-1.0207944.4860261-.8739807-.6090825-.8739807-.6090825s.0486242-4.09309643.0069015-5.12652191c-.0417227-1.03311551.8815097-.54243989.8815097-.54243989l5.1792615 2.64710667s1.0129518.47982682-.0178812 1.00304883c-.760106.3859072-4.15533 2.1418627-5.1758108 2.6278888zm-14.15215252.1404143c-1.02079448.4860261-.87398077-.6097025-.87398077-.6097025s.0486242-4.09278638.0069015-5.12621184c-.0417227-1.03311551.88150968-.54243989.88150968-.54243989l5.1792615 2.64710663s1.01295187.47982682-.01788116 1.0033588c-.75979233.3862172-4.15501627 2.1415527-5.17581075 2.6278888zm7.08093875-3.67247306c-1.02048082.48602615-.87429451-.60908252-.87429451-.60908252s.0489379-4.09278653.0069015-5.12652199c-.0410953-1.03311554.88182342-.54212994.88182342-.54212994l5.17926176 2.64679675s1.0129519.47982683-.0175675 1.00304886c-.7601061.38621721-4.15533014 2.14217265-5.17612467 2.62788884zm-7.9568052 11.80783076c-.00156507-.5272516.53236005-.3112055.53236005-.3112055s5.27745143 2.6874023 5.87380376 2.9961281c.59697973.3090358.00125482.6512379.00125482.6512379s-2.13162234 1.0582228-4.20081746 2.1161356c-2.06888143 1.0585327-2.1981277-.9878606-2.1981277-.9878606zm.02259004-15.49363246.00470571-4.4647452s.12767774-2.04608325 2.19750021-.98972032c2.06982247 1.05605296 4.20269955 2.11179596 4.20269955 2.11179596s.5957249.34220208-.00062741.6515478c-.59666601.30934572-5.87098023 3.00139738-5.87098023 3.00139738s-.5336114.21635602-.53329783-.31027562z" fill="url(#a)" fillRule="evenodd" transform="translate(.367831) "/></svg><p className="ml-2 text-gray-400 text-sm">86%</p>
                                    <Image src={imdb} placeholder="blur" width="15" height="15"alt="imdb" className="ml-4"/><p className="ml-2 text-gray-400 text-sm">{current.data.vote_average} ({current.data.vote_count}K)</p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-800 hr mt-4" />
                            <div>
                                <h1 className="text-sm font-semibold mt-4 mb-2" style={{color: 'var(--ion-color-secondary)'}}>GÊNEROS</h1>
                                <div className="flex items-center justify-start">
                                    <p className="text-gray-400 text-sm">
                                        {
                                            current.data.genres.map((genre, index)=>{
                                                return (
                                                    <span key={index} className="inline">{genre.name}, </span>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-800 hr mt-4" />
                            <div>
                                <h1 className="text-sm font-semibold mt-4 mb-2" style={{color: 'var(--ion-color-secondary)'}}>RUNTIME</h1>
                                <div className="flex items-center justify-start">
                                    <p className="text-gray-400 text-sm">
                                        {
                                            convertedRuntime
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-800 hr mt-4" />
                            <div>
                                <h1 className="text-sm font-semibold mt-4 mb-2" style={{color: 'var(--ion-color-secondary)'}}>PAÍS DE PRODUÇÃO</h1>
                                <div className="flex items-center justify-start">
                                    <p className="text-gray-400 text-sm">
                                    {
                                            current.data.production_countries.map((country, index)=>{
                                                return (
                                                    <span key={index} className="inline">{country.name}, </span>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-800 hr mt-4" />
                            <div>
                                <h1 className="text-sm font-semibold mt-4 mb-2" style={{color: 'var(--ion-color-secondary)'}}>DIRETOR</h1>
                                <div className="flex items-center justify-start">
                                    {/* I was not finding the endpoint to get directors */}
                                    <p className="text-gray-400 text-sm">Aaron Horvath , Michael Jelenic</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold mt-6 mb-2" style={{color: 'var(--ion-color-secondary)'}}>JUSTWATCH DAILY STREAMING CHARTS</h1>
                                <ul className="flex flex-col gap-4 mt-2">
                                    <ChartItemUp number={2} title="Super Mário Bros" status={'+2'} image={imgTeste} key={2} />
                                    <ChartItemDown number={3} title="Super Mário Bros" status={'-3'} image={imgTeste} key={3} />
                                    <ChartItemUp number={4} title="Super Mário Bros" status={'+1'} image={imgTeste} key={4} />
                                    <ChartItemDown number={5} title="Super Mário Bros" status={'-2'} image={imgTeste} key={5} />
                                    <ChartItemDown number={6} title="Super Mário Bros" status={'-2'} image={imgTeste} key={6} />
                                </ul>
                            </div>
                            
                        </div>
                        <div className="right pl-10 w-full">
                            <div className="flex justify-between items-center">
                                <h1 className="latoTitle"> {current.data.title} <span className="text-md font-normal" style={{fontSize: '16px' ,color: 'var(--ion-color-light)'}}>({current.data.release_date.substring(0, 4)})</span></h1>
                                <button  style={{color: 'var(--ion-color-light)'}} className="flex flex-col items-center justify-center">
                                    <FaShareNodes className="w-7 h-7"/>
                                    <p>Share</p>
                                </button>
                            </div>
                            <p style={{fontSize: '16px', color: 'var(--ion-color-light)'}}>Título Original: {current.data.original_title}</p>
                            <div>
                                <h1 className="text-md font-semibold mt-8" style={{color: 'var(--ion-color-secondary)'}}>ASSISTA AGORA</h1>
                                <div className="w-full h-12 rounded-sm mt-2 p-2 flex items-center relative" style={{backgroundColor: 'var(--ion-color-tertiary)'}}>
                                    <FaFilter className="w-5 h-5 text-gray-700"/><h1 className="font-medium ml-2 text-gray-700">Filtros</h1>
                                    <ul className="flex ml-6 text-gray-500 gap-1 text-sm">
                                        <li className="px-2 py-2 rounded-md hover:bg-gray-600 hover:text-white transition-colors duration-300">Melhor Preço</li>
                                        <li className="px-2 py-2 rounded-md hover:bg-gray-600 hover:text-white transition-colors duration-300">Grátis</li>
                                        <li className="px-2 py-2 rounded-md hover:bg-gray-600 hover:text-white transition-colors duration-300">SD</li>
                                        <li className="px-2 py-2 rounded-md hover:bg-gray-600 hover:text-white transition-colors duration-300">HD</li>
                                        <li className="px-2 py-2 rounded-md hover:bg-gray-600 hover:text-white transition-colors duration-300">4K</li>
                                    </ul>
                                    <div className="absolute top-0 right-2 h-full flex items-center justify-center">
                                        <h1 className="font-semibold text-sm ml-2 text-gray-700">Streaming in: </h1>
                                        <select className="ml-2 py-1.5 px-2 text-white text-sm bg-gray-800 outline-none border-none rounded">
                                            <option>Angola</option>
                                            <option>Portugal</option>
                                            <option>Brasil</option>
                                            <option>Cabo Verde</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full stream rounded-sm mt-2 flex items-center relative" style={{backgroundColor: 'var(--ion-color-tertiary)'}}>
                                <span className="substream w-12 text-sm text-gray-700  -rotate-90 bg-gray-300 overflow-hidden flex items-center justify-center">AMOSTRA</span>
                                <div>
                                    <div className="bg-gray-800 ml-8 flex rounded-l-xl rounded-r-md items-center">
                                        <Image src={justLogo} alt="logo" width={45} height={45}/>
                                        <Image src={play} alt="playLogo" className="ml-4"/>
                                        <h1 className="text-white font-semibold text-sm ml-3">Ver com o período grátis.</h1>
                                    </div>
                                    <p className="ml-10 text-white text-sm mt-2">Ver filmes semelhantes grátis na AppleTv</p>
                                </div>
                            </div>
                            <div className="w-full stream rounded-sm mt-1 p-2 flex items-center relative" style={{backgroundColor: 'var(--ion-color-tertiary)'}}>
                                <span className="substream w-12 text-sm text-gray-700  -rotate-90 bg-gray-300 overflow-hidden flex items-center justify-center">STREAM</span>
                                <div className="flex items-center justify-center">
                                    <div className="ml-10 text-white text-sm mt-2 w-3/6">
                                        {current.data.title} - O filme não está disponivel gratuitamente.
                                    </div>
                                    <div className="bg-yellow-600 rounded-md flex text-sm items-center justify-center py-2 px-4">
                                        <FaBell className="text-black mr-2 w-4 h-4" /> Notifique-me quando puder assistir gratuitamente.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full ">
                                <h1 className="text-sm font-semibold mt-6 mb-2" style={{color: 'var(--ion-color-secondary)'}}>SINOPSE</h1>
                                <p className="text-gray-300 mt-2 text-sm"> {current.data.overview} </p>
                            </div>
                            <div className="w-full ">
                                <h1 className="text-sm font-semibold mt-6 mb-2" style={{color: 'var(--ion-color-secondary)'}}>{current.data.title} - ASSISTIR ONLINE, COMPRE OU ALUGUE</h1>
                                <p className="text-gray-300 mt-2 text-sm">
                                Você pode assistir "{current.data.title}" no Google Play Movies para comprar o Download ou no Google Play Movies alugando online.
                                </p>
                            </div>
                            <div className="w-full mt-4">
                                <h1 className="text-sm font-semibold mt-6 mb-2" style={{color: 'var(--ion-color-secondary)'}}>VIDEOS: TRAILER, TEASERS, FEATURESTTES</h1>
                                <iframe width="700" height="315" src={videoPath4} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-md mb-4"></iframe>
                                <div className="flex gap-4">
                                    <iframe className="rounded-md" width="340" height="240" src={videoPath2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <iframe className="rounded-md" width="340" height="240" src={videoPath3} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="w-full ">
                                <h1 className="text-sm font-semibold mt-6 mb-2" style={{color: 'var(--ion-color-secondary)'}}>CAST</h1>
                                <CastSlider credits={credits} />
                            </div>
                            <div className="w-full">
                                <h1 className="text-sm font-semibold mt-6 mb-4" style={{color: 'var(--ion-color-secondary)'}}>O QUE MAIS PODERIA INTERESSAR VOCÊ</h1>

                                <CastSwiper upCommingMovies={similarMovies} />
                                
                            </div>
                            <div className="w-full">
                                <h1 className="text-sm font-semibold mt-10 mb-4" style={{color: 'var(--ion-color-secondary)'}}>POPULAR MOVIES COMING SOON</h1>

                                <CastSwiper upCommingMovies={popularMovies} />
                                
                            </div>
                            <div className="w-full">
                                <h1 className="text-sm font-semibold mt-10 mb-4" style={{color: 'var(--ion-color-secondary)'}}>UPCOMING MEDIA MOVIES</h1>

                                <CastSwiper upCommingMovies={upCommingMovies} />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
