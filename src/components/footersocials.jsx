import React from 'react';
import Footersocial from '../Assets/footersocial.png'

const MyComponent = () => {
    return (
        <div className='border-t-2 border-white bg-footerBg '>
            <div className='px-12 py-4 m-auto flex flex-col items-center md:flex md:flex-row md:justify-between'>
                <p className='text-white text-sm mb-5 md:mb-0'>Copyright © 2020 Go2Uni, inc. All right reserved.</p>
                <a href='#'>
                    <img src={Footersocial} className='w-[10rem]'/>
                </a>

            </div>
        </div>
    );
};

export default MyComponent;
