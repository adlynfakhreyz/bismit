import Link from 'next/link';
import 'src/app/globals.css'; 
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
        <p className = 'text-6xl ml-10 flex font-bold text-black py-16'>Meet The Team</p>
        <div className = 'columns-2 text-center py-0 flex'>
          <div className = 'flex h-10 w-60 rounded-2xl ml-10 bg-red-400'>
            <p className = 'ml-9 mt-2'>UI/UX Designer</p>
          </div>
          <div className = 'flex h-10 rounded-2xl mr-10 mx-10 w-full bg-red-400'>
            <p className = 'mt-2 ml-8'>Software Engineer</p>
          </div>
        </div>
        <div className = 'flex columns-5 items-center text-center text-black py-10'>
          <div> 
            <img className = 'px-5 ml-2' src= 'https://i.ibb.co/zH4H0xv/IMG-0007-2-1.png'></img>  
            <p className = 'py-4'>Arya Raditya Kusuma</p>
            <p className = 'text-sm'>instagram.com/aryaradityak</p>
            <p className = 'text-sm'>www.linkedin.com/in/arya-raditya-kusuma</p>
          </div>
          <div>
            <img className = 'px-5 ml-5' src= 'https://i.ibb.co/D4MMDTD/Frame-1068.png'></img>  
            <p className = 'py-4'>Alyssa Layla Sasti</p>
            <p className = 'text-sm'>instagram.com/alyssa.layla</p>
            <p className = 'text-sm'>www.linkedin.com/in/</p>
          </div>
          <div> 
            <img className = 'px-5 ml-5' src= 'https://i.ibb.co/VjZCM0B/Frame-1069.png'></img>
            <p className = 'pt-4'>Andi Muhammad Adlyn</p>
            <p className = 'pb-4'>Fakhreyza Khairi Putra</p>
            <p className = 'text-sm'>instagram.com/adlynfakhreyz</p>
            <p className = 'text-sm'>www.linkedin.com/in/adlynfakhreyza</p>
          </div>
          <div> 
            <img className = 'px-5 ml-5' src= 'https://i.ibb.co/QJxcp7w/Frame-1070.png'></img>
            <p className = 'py-4'>Anthony Edbert Feriyanto</p>
            <p className = 'text-sm'>instagram.com/anth.ef</p>
            <p className = 'text-sm'>www.linkedin.com/in/anthony-edbert-feriyanto</p>

          </div>
          <div> 
            <img className = 'px-5 ml-5' src= 'https://i.ibb.co/tQFxjx8/Frame-1071.png'></img>
            <p className = 'py-4'>Micheline Wijaya Limbergh</p>
            <p>instagram.com/michelinewl</p>
            <p>https://www.linkedin.com/in/micheline-wl </p>
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
      </div>
    </main>
  )
}