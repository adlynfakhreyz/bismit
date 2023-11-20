import Link from 'next/link';
import 'src/app/globals.css';
import 'src/app/style.css';
import Head from 'next/head';
import Image from 'next/image';
import sendokgarpu from 'public/sendok-garpu.png'
import footer from 'public/footer.png'

export default function explore() {
  return (
    <main>
      <nav className='shadow-lg navbar'>
        <div className='flex flex-row items-center'>
          <Image className='sendok-garpu' src={sendokgarpu} alt='sendokgarpu'/>
          <p className='review-kantin'>Review Kantin</p>
        </div>
        <div className='flex flex-row items-center'>
          <Link className='nav-button' href=''>Find on Map</Link>          
          <Link className='nav-button' href=''>Reviews</Link>
          <Link className='nav-button' href='\explore'>Explore</Link>
          <Link className='nav-button' href=''>Meet the Team</Link>
        </div>
      </nav>

      <div className='content'>
        <p className='explore-text'>Explore</p>
      </div>
      
      <div className='grids'>
        <Link className='bubble flex items-center justify-center color1 ;' href={'/explore/noodles'}>
          <button>Chicken</button>
        </Link>
        <Link className='bubble flex items-center justify-center color2' href={'/explore/noodles'}>
          <button>Seafood</button>
        </Link>
        <Link className='bubble flex items-center justify-center color3' href={'/explore/noodles'}>
          <button>Beef</button>
        </Link>
        <Link className='bubble flex items-center justify-center color2' href={'/explore/noodles'}>
          <button>Noodles</button>
        </Link>
        <Link className='bubble flex items-center justify-center color3' href={'/explore/noodles'}>
          <button>Bread/Cake</button>
        </Link>
        <Link className='bubble flex items-center justify-center color1' href={'/explore/noodles'}>
          <button>Desserts</button>
        </Link>
        <Link className='bubble flex items-center justify-center color3' href={'/explore/noodles'}>
          <button>Veggies</button>
        </Link>
        <Link className='bubble flex items-center justify-center color2' href={'/explore/noodles'}>
          <button>Beverages</button>
        </Link>
        <Link className='bubble flex items-center justify-center color2' href={'/explore/noodles'}>
          <button>Coffee</button>
        </Link>
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
                <Link href='/explore' className='flex justify-start'><button className="footer-button">Explore</button></Link>
                <Link href='/reviews' className='flex justify-start'><button className="footer-button">Reviews</button></Link>
                <Link href='/meet-the-team' className='flex justify-start'><button className="footer-button">Meet the Team</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}