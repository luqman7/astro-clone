import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'

function Banner() {
    return (
        <div className='relative h-[350px] sm:h-[150px] lg:h-[250px] xl:h-[350px] 2xl:h-[450px]'>
            <Image
                src='https://th.bing.com/th/id/OIP.CdpP3qv3HsTdiQHt4PlE3AHaE8?pid=ImgDet&rs=1'
                alt= ''
                layout='fill'
                objectFit='cover'
            />

            <div className='absolute w-full text-center'>
                <p className=' text-2xl md:text-3xl font-bold text-white py-5'>CONTENT GUIDE</p>

                {/* <div className='absolute flex items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none' type="text" />
                    <SearchIcon className='h-12 p-4' />
                </div> */}
                <br />
                <br className='hidden lg:block' />
                <br className='hidden lg:block' />
                <Carousel
                    autoPlay
                    infiniteLoop
                    centerMode={true}
                    centerSlidePercentage={45}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={5000}
                >
                    <div>
                        <img className='h-56' loading='lazy' src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/tamiletchumy-s2.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-56' loading='lazy' src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/astro25-ch_content.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-56' loading='lazy' src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/the-hotel.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-56' loading='lazy' src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/tanah-tumpahnya-darah-kita.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-56' loading='lazy' src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/all-together-now-malaysia.jpg" alt="" />
                    </div>
                </Carousel>
            </div>

            
        </div>
    )
}

export default Banner
