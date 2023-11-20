import Link from 'next/link';
import 'src/app/globals.css'; 
import 'src/app/style.css'
import Head from 'next/head';
import Image from 'next/image';
import sendokgarpu from 'public/sendok-garpu.png'
import footer from 'public/footer.png'
import right from 'public/right.png'
import left from 'public/left.png'

export default function reviews() {
  return (
    <main>
      <nav className='shadow-lg navbar'>
        <div className='flex flex-row items-center'>
          <Image className='sendok-garpu' src={sendokgarpu} alt='sendokgarpu'/>
          <p className='review-kantin'>Review Kantin</p>
        </div>
        <div className='flex flex-row items-center'>
          <Link className='nav-button' href='\find-on-map'>Find on Map</Link>          
          <Link className='nav-button' href='\reviews'>Reviews</Link>
          <Link className='nav-button' href='\explore'>Explore</Link>
          <Link className='nav-button' href='\meet-the-team'>Meet the Team</Link>
        </div>
      </nav>

      <div className='content'>
        <div className='flex flex-row justify-between'>
          <p className='explore-text'>Dallas - FMIPA</p>
          <div className='flex'>
            <Link className='arrow flex items-center' href=''>
              <Image src={right} alt='right'/>
            </Link>
            <Link className='arrow flex items-center flex-start' href=''>
              <Image src={left} alt='left'/>
            </Link>
          </div>
        </div>
        <button className='backtomap backtomap-text'>Redirect to Maps</button>

        <div className='sliding-image'>
          SLIDING IMAGE
        </div>

        <div>
          <p className='reviews-title'>Most Mentioned Foods</p>
          
        </div>

        <div className='reviews-title'>Reviews</div>

      </div>
      

      
      
      <div className="min-h-screen flex flex-col">
        {/* Your main content */}

        <div className="flex-grow">
          {/* Your existing content goes here */}
        </div>

        {/* Element at the bottom */}
        <div className="flex-shrink-0">
          <div className="footer-container">
            <Image src={footer} alt="footer" className="footer-image" />

            <div className="footer-content">
              <p className="review-text">
                Review<br />
                <span className="kantin-text">Kantin</span>
              </p>
            </div>

            <div className="footer-nav">
              <div className="grid grid-rows-4 footer">
                <Link href='/find-on-map' className='flex justify-start'><button className="footer-button">Find on Map</button></Link>
                <Link href='/reviews' className='flex justify-start'><button className="footer-button">Reviews</button></Link>
                <Link href='/explore' className='flex justify-start'><button className="footer-button">Explore</button></Link>
                <Link href='/meet-the-team' className='flex justify-start'><button className="footer-button">Meet the Team</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}