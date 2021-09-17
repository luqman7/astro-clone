import { UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'


function Secondheader() {
    const router = useRouter();

    return (
        <div className='bg-gradient-to-t from-red-600 to-pink-600 p-7'>
                <div className='flex items-center h-1 md:h-2 md:space-x-10 sm:mx-52 justify-between lg:justify-start'>
                <Image
                        onClick={() => router.push('/')}
                        src='https://acm-assets.eco.astro.com.my/images/astro-logo-white.svg'
                        alt=''
                        width={76}
                        height={32}
                        objectFit='contain'
                        className='cursor-pointer'
                    />
                    <div className='flex items-center space-x-2 block lg:hidden'>
                        <UserIcon className=' text-white cursor-pointer h-5' />
                        <p className='text-white text-xs cursor-pointer '>Login</p>
                    </div>

                    <div className='hidden lg:flex items-center space-x-4 text-white'>
                        <p className='cursor-pointer font-bold'>Products & Services</p>
                        <p className='cursor-pointer font-bold'>TV Guide</p>
                        <p className='cursor-pointer hover:font-bold'>Promotions</p>
                        <p className='cursor-pointer hover:font-bold'>My Account</p>
                        <p className='cursor-pointer hover:font-bold'>Support</p>
                    </div>
                </div>
        </div>
    )
}

export default Secondheader
