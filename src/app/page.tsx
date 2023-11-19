import Link from 'next/link';
import 'src/app/globals.css'; 
import Head from 'next/head';
import Image from 'next/image';
import sendokgarpu from 'public/sendok-garpu.png'
import footer from 'public/footer.png'

export default function Home() {
  return (
    <main>
      <nav className='shadow-lg navbar px-16'>
        <div className='flex flex-row'>
          <Image src={sendokgarpu} alt='sendokgarpu'/>
          <p className='review-kantin self-center'>Review Kantin</p>
        </div>
        <div className='flex flex-row'>
          <Link href=''><button className='nav-button'>Find on Map</button></Link>
          <Link href=''><button className='nav-button'>Reviews</button></Link>
          <Link href='\explore'><button className='nav-button'>Explore</button></Link>
          <Link href=''><button className='nav-button'>Meet the Team</button></Link>
        </div>
      </nav>
      <div className='fixed bottom-0'>
        <div className='footer-container'>
          <Image src={footer} alt='footer' className='footer-image'/>
          <div className='footer-content'>
            <p className='review-text'>
              Review<br/>
              <span className='kantin-text'>Kantin</span>
            </p>
          </div>
          <div className='footer-nav'>
            <div className='grid grid-rows-4 footer'>
              <button className='footer-button'>Find on Map</button>
              <button className='footer-button'>Explore</button>
              <button className='footer-button'>Reviews</button>
              <button className='footer-button'>Meet the Team</button>
            </div>
          </div>
        </div>
      </div>
        
    </main>
  )
}