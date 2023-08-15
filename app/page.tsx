import Image from "next/image"
import { FlayerSwiper } from "@/components/client/flayerSwiper"
import { CardBanner } from "@/components/cardBanner"
import gpay from '@/assets/images/gplay.webp'
import mubi from '@/assets/images/mubi.webp'
import prime from '@/assets/images/primevideo.webp'
import film from '@/assets/images/filmbox.webp'
import netflix from '@/assets/images/icon.webp'
import im1 from '@/assets/images/im1.png'
import im2 from '@/assets/images/im2.png'
import im3 from '@/assets/images/im3.png'
import axios from "axios"
import '@/assets/js/animation'
import { SecondSwiper } from "@/components/client/secondSwiper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function Home() {

  var movies:[] = []
  var topRated:[] = []

  const response = await axios.get("https://api.themoviedb.org/3/discover/movie?&language=pt-BR", {
      method: 'GET',
      headers:  {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
      accept: 'application/json'
    }
  })
  movies = await response.data.results

  const resp = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=PT-br&page=2", {
      method: 'GET',
      headers:  {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3OTA1M2ExNGJlNmQ4NmNhZWJmMTAyNDViNDdmYSIsInN1YiI6IjY0Yzc3MTdkOTVjZTI0MDEwMTMwMDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0STrkQG6z421pj-8x2Q141-qkIRYEwkkF0xUZgzV-A',
      accept: 'application/json'
    }
  })
  topRated = await response.data.results

  return (
    <main className="pt-10 pl-16 pr-16 w-full h-full relative">
      <Header/>
      <header className="w-full h-max flex flex-col items-center justify-center pt-28 z-30">
        <h1 className="z-30 text-white font-bold text-6xl text-center">O seu guia de streaming <br/> para filmes, séries e <br/> desporto</h1>
        <p className="text-gray-400 z-30 text-xl text-center mt-10">Descubra onde ver conteúdos novos e populares em streaming com a JustWatch.</p>
        <div className="w-full flex items-center justify-center gap-4 pt-12 z-30">
            <button className="btn font-semibold text-black bg-yellow-500 rounded-lg">Descubra filmes e séries</button>
            <button className="btn font-semibold text-gray-400 rounded-lg">Funcionalidaes</button>
        </div>
        <div className="pt-28 z-30">
            <h2 className="text-gray-400 text-xl text-center">Serviços de streaming disponíveis no JustWatch</h2>
            <ul className="flex items-center justify-center gap-5 pt-4">
            <li><Image className="ims rounded-md" src={gpay} alt="icon" placeholder="blur" /></li>
            <li><Image className="ims rounded-md" src={prime} alt="icon" placeholder="blur" /></li>
            <li><Image className="ims rounded-md" src={mubi} alt="icon" placeholder="blur" /></li>
            <li><Image className="ims rounded-md" src={film} alt="icon" placeholder="blur" /></li>
            <li><Image className="ims rounded-md" src={netflix} alt="icon" /></li>
            <li><button className="button ims text-sm w-16 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-gray-200 pl-3 pr-3 rounded-md">Ver tudo</button></li>
            </ul>
        </div>
      </header>
      <section className="flex justify-center items-center w-full mx-auto mt-28 z-30">
        <CardBanner title="O seu guia completo de streaming" subtitle="TUDO NUM ÚNICO LUGAR" description="Obtenha recomendações pessoais para todos os seus serviços de streaming favoritos. Mostrar-lhe-emos onde ver filmes, séries, e desporto." image={im1}/>
        <CardBanner title="Doogee Duramgo" subtitle="UMA ÚNICA PESQUISA" description="Todas as plataformas estão acessíveis numa única busca" image={im2}/>
        <CardBanner title="Combine todas as suas watchlists" subtitle="UMA ÚNICA WATCHLIST" description="Crie uma única watchlist, com todos os serviços de streaming, e todos os filmes e séries que deseja ver em todos os seus dispositivos." image={im3}/>
      </section>
      <section className="w-full">
        <h1 className="text-gray-300 mt-16 big font-bold animation opacity-0 animDown" data-animation="down">Procurar filmes e séries novas, <br/> populares e a estrear</h1>
        <div className="content w-full mt-16 flex">
          <div className="w-1/6 animation animDown" data-animation="down">
            <h1 className="text-gray-200 font-bold text-xl">Top 10 filmes <br/> esta semana</h1>
            <p className="text-gray-500 mt-6">Descubra os filmes mais populares desta semana e saiba onde os ver.</p>
          </div>
          <div className="w-5/6 h-max flex">
              <SecondSwiper topRated={movies} />
          </div>
        </div>
        <div className="content w-full mt-32 flex">
          <div className="w-1/6 animation animDown" data-animation="down">
            <h1 className="text-gray-200 font-bold text-xl">Top 10 séries <br/> esta semana</h1>
            <p className="text-gray-500 mt-6">Explore as séries mais populares desta semana e saiba onde as ver.</p>
          </div>
          <div className="w-5/6 h-max flex">
            <SecondSwiper topRated={topRated} />
          </div>
        </div>
        
      </section>
      <section className="w-full mt-28 flex items-center justify-center">
        <div>
          <FlayerSwiper movies={movies} />
        </div>
      </section>
      <section className="w-full mt-36 flex items-center justify-center">
        <div className="w-full flex items-center justify-center flex-col gap-12">
          <svg height="80" viewBox="0 0 28 28" width="80" className="animation animDownSVG" data-animation="downSVG"><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0" stopColor="#fbd446"/><stop offset="1" stopColor="#e2b512"/></linearGradient><path className="svg" d="m0 19.7015845c.00056683-.0736745.00721521-.1234928.00721521-.1234928s.0486242-4.0927864.0072152-5.1262119c-.0417227-1.0328056.88150975-.5424399.88150975-.5424399l5.17926192 2.6467967s1.01263824.4804467-.01756746 1.0033588c-.7604198.3865272-4.1553303 2.1421726-5.17643857 2.6278888-.78350199.3732745-.8790368-.1862574-.88119605-.4659541v-.0199457zm21.2500314-8.8949003s-.0705836-.84310659.6525054-.4764172c.72403.3669993 4.3319457 2.1964167 4.3319457 2.1964167s1.9964156.9810413-.0047055 1.9905995c-1.4151211.7138509-3.5743494 1.8046201-4.3184565 2.1784387-.7444208.3738186-.6669358-.4317822-.6669358-.4317822zm-6.2110368 9.5159455c-1.0207944.4860261-.8742944-.6090825-.8742944-.6090825s.0489379-4.0927863.0075289-5.1265217c-.0420364-1.0334255.8815097-.5421299.8815097-.5421299l5.1786341 2.6464866s1.0132656.4801368-.0175675 1.0036688c-.7594786.3859072-4.1547026 2.1418626-5.1758108 2.6275787zm-7.07027199 3.5171807c-1.02110824.4860262-.87429452-.6100124-.87429452-.6100124s.04862421-4.0927866.00721521-5.1259022c-.0417227-1.0337355.88119602-.5424399.88119602-.5424399l5.17957548 2.6467968s1.0126382.4801368-.0178812 1.0036688c-.760106.3855973-4.15501645 2.1415528-5.17581099 2.6278889zm.00784224-7.1642369c-1.02079455.4857162-.87398082-.6093925-.87398082-.6093925s.0486242-4.0927866.0069015-5.1262121c-.041409-1.03342554.88150973-.5424399.88150973-.5424399l5.17957554 2.6467968s1.0129519.4801368-.0178812 1.0033588c-.7597923.3859073-4.15501649 2.1418627-5.17612475 2.6278889zm7.06399885-3.7003698c-1.0207944.4860261-.8739807-.6090825-.8739807-.6090825s.0486242-4.09309643.0069015-5.12652191c-.0417227-1.03311551.8815097-.54243989.8815097-.54243989l5.1792615 2.64710667s1.0129518.47982682-.0178812 1.00304883c-.760106.3859072-4.15533 2.1418627-5.1758108 2.6278888zm-14.15215252.1404143c-1.02079448.4860261-.87398077-.6097025-.87398077-.6097025s.0486242-4.09278638.0069015-5.12621184c-.0417227-1.03311551.88150968-.54243989.88150968-.54243989l5.1792615 2.64710663s1.01295187.47982682-.01788116 1.0033588c-.75979233.3862172-4.15501627 2.1415527-5.17581075 2.6278888zm7.08093875-3.67247306c-1.02048082.48602615-.87429451-.60908252-.87429451-.60908252s.0489379-4.09278653.0069015-5.12652199c-.0410953-1.03311554.88182342-.54212994.88182342-.54212994l5.17926176 2.64679675s1.0129519.47982683-.0175675 1.00304886c-.7601061.38621721-4.15533014 2.14217265-5.17612467 2.62788884zm-7.9568052 11.80783076c-.00156507-.5272516.53236005-.3112055.53236005-.3112055s5.27745143 2.6874023 5.87380376 2.9961281c.59697973.3090358.00125482.6512379.00125482.6512379s-2.13162234 1.0582228-4.20081746 2.1161356c-2.06888143 1.0585327-2.1981277-.9878606-2.1981277-.9878606zm.02259004-15.49363246.00470571-4.4647452s.12767774-2.04608325 2.19750021-.98972032c2.06982247 1.05605296 4.20269955 2.11179596 4.20269955 2.11179596s.5957249.34220208-.00062741.6515478c-.59666601.30934572-5.87098023 3.00139738-5.87098023 3.00139738s-.5336114.21635602-.53329783-.31027562z" fill="url(#a)" fillRule="evenodd" transform="translate(.367831) " stroke="url(#a)" strokeWidth="1"/></svg>
          <h1 className="mini text-gray-300 text-center animation animDownS" data-animation="down">Descubra os melhores filmes e séries em <br/> todos os seus serviços de streaming <br/> preferidos</h1>
          <button className="bg-yellow-400 text-xl font-semibold px-4 py-2 rounded-md animation animDownS" data-animation="down">Encontre filmes & séries</button>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
