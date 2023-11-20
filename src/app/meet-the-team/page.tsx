import Link from 'next/link';
import 'src/app/globals.css'; 
import 'src/app/style.css';
import Head from 'next/head';
import Image from 'next/image';
import sendokgarpu from 'public/sendok-garpu.png'
import footer from 'public/footer.png'

export default function meettheteam() {
  return (
    <main>
      <nav className='shadow-lg navbar'>
        <div className='flex flex-row items-center'>
          <Image className='sendok-garpu' src={sendokgarpu} alt='sendokgarpu'/>
          <p className='review-kantin'>Review Kantin</p>
        </div>
        <div className='flex flex-row items-center'>
          <Link className='nav-button' href='\'>Find on Map</Link>          
          <Link className='nav-button' href='\reviews'>Reviews</Link>
          <Link className='nav-button' href='\explore'>Explore</Link>
          <Link className='nav-button' href='\meet-the-team'>Meet the Team</Link>
        </div>
      </nav>
      
      <div className="min-h-screen flex flex-col">
        <div className='content'>
          <p className='explore-text'>Meet the Team</p>

          <div className='pps-ui'>
            <button className='role pointer-events-none'>UI/UX Designer</button>
            <button className='role pointer-events-none'>Software Engineer</button>

            <img className = 'pp' src= 'https://i.ibb.co/zH4H0xv/IMG-0007-2-1.png'></img> 
            <div className='pps-se'>
              <img className = 'pp' src= 'https://i.ibb.co/D4MMDTD/Frame-1068.png'></img>
              <img className = 'pp' src= 'https://i.ibb.co/VjZCM0B/Frame-1069.png'></img>
              <img className = 'pp' src= 'https://i.ibb.co/QJxcp7w/Frame-1070.png'></img>
              <img className = 'pp' src= 'https://i.ibb.co/tQFxjx8/Frame-1071.png'></img>
            </div>  

            <div>
              <p className='profile'>
                <span className='name'>Arya Raditya Kusuma</span> <br />
                instagram.com/aryaradityak<br />
                www.linkedin.com/in/arya-raditya-kusuma
              </p>
            </div>

            <div className='pps-se'>

              <div>
                <p className='profile'>
                  <span className='name'>Alyssa Layla Sasti</span> <br />
                  instagram.com/alyssa.layla<br />
                  www.linkedin.com/in/alyssalaysast
                </p>
              </div>

              <div>
                <p className='profile'>
                  <span className='name'>Andi Muhammad Adlyn Fakhreyza Khairi Putra</span> <br />
                  instagram.com/adlynfakhreyz<br />
                  www.linkedin.com/in/adlynfakhreyza
                </p>
              </div>

              <div>
                <p className='profile'>
                  <span className='name'>Anthony Edbert Feriyanto</span> <br />
                  instagram.com/anth.ef<br />
                  www.linkedin.com/in/anthony-edbert-feriyanto
                </p>
              </div>

              <div>
                <p className='profile'>
                  <span className='name'>Michelin Wijaya Limbergh</span> <br />
                  instagram.com/michelinewl<br />
                  www.linkedin.com/in/micheline-wl
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
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
                <Link href='/' className='flex justify-start'><button className="footer-button">Find on Map</button></Link>
                <Link href='/reviews' className='flex justify-start'><button className="footer-button">Reviews</button></Link>
                <Link href='/explore' className='flex justify-start'><button className="footer-button">Explore</button></Link>
                <Link href='/meet-the-team' className='flex justify-start'><button className="footer-button">Meet the Team</button></Link>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}