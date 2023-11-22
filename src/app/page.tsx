import Link from 'next/link';
import 'src/app/style.css';
import 'src/app/globals.css'
import Image from 'next/image';
import sendokgarpu from 'public/sendok-garpu.png'
import footer from 'public/footer.png'

export default function home() {
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
        <div className= 'h-full w-full'>
          <div className='relative'>
            <img className = 'h-full w-full' src = "https://i.ibb.co/LC9qDcF/snazzy-image-3-1.png"></img>
            <a href='/reviews'>
              <div className='absolute'style={{ bottom: '160px', left: '600px'}}>
                <img
                  className='h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90'
                  src='https://i.ibb.co/BCxWDL3/Frame-1032.png' alt="Overlay Image Dallas"style={{ zIndex: 10 }}/>
              </div>
            </a>
            <a href='/reviews'>
              <div className = 'absolute'style={{ top: '425px', left: '500px'}}>
                <img
                  className= 'h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90'
                  src='https://i.ibb.co/Q8frhhH/Frame-1031.png'alt="Overlay Image Kantek" style={{ zIndex: 10 }}/>
              </div> 
            </a>
            <a href="/reviews">
              <div className = 'absolute'style={{ top: '300px', left: '600px'}}>
                <img
                  className = 'h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90' 
                  src='https://i.ibb.co/YLQ9DL0/Frame-1034.png' alt="Overlay Image Kafe" style={{ zIndex: 10 }}/>
              </div>
            </a>
            <a href="/reviews">
              <div className = 'absolute'style={{ bottom: '200px', left: '330px'}}>
                <img 
                className = 'h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90'
                src='https://i.ibb.co/4wqxZkx/Frame-1035.png' alt="Overlay Image Kanvok" style={{ zIndex: 10 }}/>
              </div> 
            </a>
            <a href="/reviews">
              <div className = 'absolute'style={{ top: '480px', left: '700px'}}>
                <img 
                className = 'h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90'
                src='https://i.ibb.co/G3VGWPP/Frame-1036.png' alt="Overlay Image Balgebun" style={{ zIndex: 10 }}/>
              </div> 
            </a>
            <a href="/reviews">
              <div className = 'absolute'style={{ top: '470px', right: '520px'}}>
                <img 
                className ='h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90'
                src='https://i.ibb.co/RzpNbVX/Frame-1038.png' alt="Overlay Image Kanmer" style={{ zIndex: 10 }}/>
              </div> 
            </a>
            <a href="/reviews">
              <div className = 'absolute'style={{ top: '460px', left: '625px'}}>
                <img 
                className = 'h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90' 
                src='https://i.ibb.co/pjd7n3Z/Frame-1041.png'alt="Overlay Image Kansas" style={{ zIndex: 10 }}/>
              </div>
            </a>
            <a href="/reviews">
              <div className = 'absolute'style={{ bottom: '170px', right: '555px'}}>
                <img 
                className = 'h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90' 
                src='https://i.ibb.co/jytt0C0/Frame-1039.png'alt="Overlay Image Kanrik" style={{ zIndex: 10 }}/>
              </div>
            </a>
            <a href="/reviews">
              <div className = 'absolute' style={{top: '430px', right: '600px'}}>
              <img 
              className = 'h-24 w-20 transition-transform transform hover:scale-125 hover:opacity-90' 
              src='https://i.ibb.co/8Bb6Dph/Frame-1033.png'alt="Overlay Image Takor" style={{ zIndex: 10 }}/>
              </div>
            </a>
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
