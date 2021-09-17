import { SearchIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <header className='hidden lg:block bg-black'>
            <div className='p-3 flex justify-between sm:mx-56'>
                <div className='flex items-center space-x-7 text-white text-sm'>
                    <p className='cursor-pointer font-bold'>Consumer</p>
                    <p className=' hidden md:block cursor-pointer hover:font-bold'>Business</p>
                    <p className=' hidden md:block cursor-pointer hover:font-bold'>Corporate</p>
                    <p className=' hidden md:block cursor-pointer hover:font-bold'>Our Brands</p>
                </div>

                <div className='flex items-center space-x-7 text-white text-sm md:pr-32'>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <SearchIcon className='cursor-pointer h-5' />
                        <p>Search</p>
                    </div>
                    
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <UserIcon className='cursor-pointer h-5' />
                        <p>Login</p>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header
