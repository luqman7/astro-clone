import Image from "next/image"
import moment from "moment"
import router from "next/router"

function ChannelList({channelId, img, stbNo, title, nowTime, nowProgramTitle, nextTime, nextProgramTitle, nextTime2, nextProgramTitle2}) {
    // console.log({nowProgramTitle})

    const channel = () => {
        router.push({
            pathname: '/channel/[cid]',
            query: { cid: channelId },
        });
    };

    return (
        <div
            className='m-2 mt-5 p-4 cursor-pointer border-gray-100 border-2 hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out shadow-md hover:shadow-lg'
            onClick={channel}
        >
            <div className='flex items-center pb-3 space-x-4 '>
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

            <div className='border-t-2 border-gray-200'>
                <table className='table-auto'>
                    <thead className='font-semibold'>
                        <tr>
                            <td className='text-sm text-gray-500'>On Now</td>
                            <td className='text-sm text-gray-500'>{ nowProgramTitle[0] }</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-sm text-gray-400'>{moment(nextTime[1]).format("LT")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td className='text-sm text-gray-400'>{nextProgramTitle[1]}</td>
                        </tr>
                        <tr>
                            <td className='text-sm text-gray-400'>{moment(nextTime[2]).format("LT")}</td>
                            <td className='text-sm text-gray-400'>{nextProgramTitle2[2]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default ChannelList
