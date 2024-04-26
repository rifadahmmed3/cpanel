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

import { Skeleton } from "@/components/ui/skeleton"


//   export async function getServerSideProps(context){
//   const sliderList= await GlobalApi.getSliders();
//   return {
//     props: {
//       sliders:sliderList,
//     }
//   }
// }



function SlidersOne() {

    const [sliderLists,getSliderList]= useState([])
    const [cheack,setCheak] = useState(true)

    const getSliders= async() =>{
        const sliderList= await GlobalApi.getSliders();
        getSliderList(sliderList);
        setCheak(false);
    }
    
    getSliders()


  return (
    <div>
        {cheack? <Carousel>
        <CarouselContent>
        
                <CarouselItem >
                    {/* <Card className="p-4" radius="lg">
                        <Skeleton className="rounded-lg">
                            <div className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"></div>
                        </Skeleton>
                    </Card> */}

                    <Skeleton className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl" />


                    {/* <Image src='/slider.jpg'
                    unoptimized={true}
                    width={120}
                    height={100}
                    alt='sld'
                    className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl'
                    /> */}
                    {/* <h2>{"sample is "+slider?.attributes?.icon?.data?.attributes?.name}</h2> */}
                </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

        :<Carousel>
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
    </Carousel>
    
    }
        

    </div>
  )
}

export default SlidersOne