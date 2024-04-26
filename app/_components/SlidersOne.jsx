"use client"
import React from 'react'
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

  export async function getServerSideProps(context){
  const sliderList= await GlobalApi.getSliders();
  return {
    props: {
      slider:sliderList,
    }
  }
}



async function SlidersOne({sliderList}) {


    // const sliderList= await GlobalApi.getSliders();


  return (
    <div>
        <Carousel>
                <CarouselContent>
                    {sliderList.map((slider,index)=>(
                        <CarouselItem >
                            <Image src={slider.attributes?.icon?.data[0]?.attributes?.url}
                            unoptimized={true}
                            width={120}
                            height={100}
                            alt='sld'
                            className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl'
                            />
                            {/* <h2>{"sample is "+slider?.attributes?.icon?.data?.attributes?.name}</h2> */}
                        </CarouselItem>
                        
                    ))}
                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

    </div>
  )
}

export default SlidersOne