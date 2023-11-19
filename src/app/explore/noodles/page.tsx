import Link from 'next/link';
import 'src\\app\\style.css';
import 'src\\app\\globals.css'
import Head from 'next/head';
import Image from 'next/image';
import sendokgarpu from 'public\\sendok-garpu.png'
import footer from 'public\\footer.png'
import location from 'public\\location.png'

export default function noodles() {
  return (
    <main>
      <nav className='shadow-lg navbar px-16'>
        <div className='flex flex-row'>
          <Image src={sendokgarpu} alt='sendokgarpu'/>
          <p className='review-kantin self-center'>Review Kantin</p>
        </div>
        <div className='flex flex-row'>
          <Link href='/find-on-map'><button className='nav-button'>Find on Map</button></Link>
          <Link href='/reviews'><button className='nav-button'>Reviews</button></Link>
          <Link href='/explore'><button className='nav-button'>Explore</button></Link>
          <Link href='/meet-the-team'><button className='nav-button'>Meet the Team</button></Link>
        </div>
      </nav>
			<div className='review-container'>
				<div className='bubble-review flex justify-center'>
					<div className='bubble pointer-events-none'>
						<p className='pad'>Noodles</p>
					</div>
				</div>

				<div>
					<p className='kantin-with'>
						Kantin With <span className='font-bold'>Noodles:</span>
					</p>
				</div>

				<div className='kantin-grid'>
					<div className='kantin-container'>
						<div>
							<div className='flex justify-items-center'>
								<Image className='location-logo' src={location} alt='location'/>
								<p className='nama-kantin'>Dallas - FMIPA</p>
							</div>
							<p className='nama-makanan'>Mie Ayam</p>
							<p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								AAAAAAAA</p>
						</div>
					</div>

					<div className='kantin-container'>
						<div>
							<div className='flex justify-items-center'>
								<Image className='location-logo' src={location} alt='location'/>
								<p className='nama-kantin'>Kantin Perpusat</p>
							</div>
							
							<p className='nama-makanan'>Mie Ayam Pelangi</p>
							<p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								AAAAAAAA</p>
						</div>
					</div>

					<div className='kantin-container'>
						<div>
							<div className='flex justify-items-center'>
								<Image className='location-logo' src={location} alt='location'/>
								<p className='nama-kantin'>Kantin FIA</p>
							</div>
							
							<p className='nama-makanan'>Mie RR</p>
							<p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								AAAAAAAA</p>
						</div>
					</div> 
				</div>
			</div>

			{/* <p className='review-text'>Review</p>
						<p className='kantin-text'>Kantin</p>

						<div className='grid grid-rows-4 footer'>
						<button className='footer-button'>Find on Map</button>
						<button className='footer-button'>Explore</button>
						<button className='footer-button'>Reviews</button>
						<button className='footer-button'>Meet the Team</button>
					</div> */}



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
    </main>
  )
}