import Image from "next/image"
import moment from "moment"

function ChannelDetails({ channelId, title, img, stbNo, desc, time, progTitle }) {
    // console.log(time)

    // for (var t of time) {
    //     var convertTime = moment(t).format("LT")
    //     console.log(convertTime);
    // }
    
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='pb-3 space-x-4 p-20 flex items-center'>
                    <div className='relative h-12 w-20'>
                        <Image
                            alt=''
                            src={img}
                            layout='fill'
                        />
                    </div>

                    <div>
                        <h2>CH{stbNo}</h2>
                        <h3 className='font-bold'>{title}</h3>
                    </div>
                </div>

                <div className='px-20 pb-10'>
                    <p className='text-gray-700'>{desc}</p>
                </div>

                <div>
                    <div className='flex space-x-4 px-20 text-gray-500'>
                        <button className='focus:font-bold focus:border-b-2 border-pink-600'>SUN</button>
                        <button className='focus:font-bold focus:border-b-2 border-pink-600'>MON</button>
                        <button className='focus:font-bold focus:border-b-2 border-pink-600'>TUES</button>
                        <button className='focus:font-bold focus:border-b-2 border-pink-600'>WED</button>
                        <button className='focus:font-bold focus:border-b-2 border-pink-600'>THU</button>
                        <button className='focus:font-bold focus:border-b-2 border-pink-600'>FRI</button>
                        <button className='focus:font-bold focus:border-b-2 border-pink-600'>SAT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelDetails
