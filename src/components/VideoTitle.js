import React from 'react'

const VideoTitle = ({title, overview}) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-6 absolute text-white bg-gradient-to-r from-black '>
            <h1 className='text-6xl font-bold' >{title}</h1>
            <p className='py-6 text-lg w-1/3 ' >{overview}</p>
            <div className='' >
                <button className='bg-white text-black font-bold p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 ' >
                   ▶️ Play
                </button>
                <button className='bg-gray-500 text-white font-bold mx-2 p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 ' >
                   More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle