import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className='bg-[url("/src/asssets/banner1.jpg")] py-[100px] lg:py-[170px] bg-cover bg-no-repeat'>
                {/* <img className='h-[500px] w-full' src={banner} alt="" /> */}
                <div className='max-w-2xl px-7 lg:px-10 '>
                    <h2 style={{ 'lineHeight': '1.5' }} className=' text-white font-bold  text-3xl md:text-4xl lg:text-5xl'>Learn New Personal & Professional Skill Online </h2>
                    <p className='text-lg opacity-70 font-medium py-3 text-white'>The Best and Largest Online Tutorial in Bangladesh the Most complate online learning soliution</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;