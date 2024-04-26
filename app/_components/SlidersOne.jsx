"use client"
import React, { useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

//   export async function getServerSideProps(context){
//   const sliderList= await GlobalApi.getSliders();
//   return {
//     props: {
//       sliders:sliderList,
//     }
//   }
// }



function SlidersOne({sliderList_}) {

    const [sliderLists,getSliderList]= useState([])

    const getSliders= async() =>{
        const sliderList= await GlobalApi.getSliders();
        getSliderList(sliderList);
    }
    
    getSliders()


  return (
    <div>
        {sliderLists? 
        <Carousel>
        <CarouselContent>
            {sliderLists.map((slider,index)=>(
                <CarouselItem key={index}>
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
    </Carousel>:<Carousel>
                <CarouselContent>
                    {sliderList_.map((slider,index)=>(
                        <CarouselItem key={index}>
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
    
    }
        

    </div>
  )
}

export default SlidersOne