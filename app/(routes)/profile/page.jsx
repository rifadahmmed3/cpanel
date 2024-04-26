"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"

  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

function profile() {

    const [jwt,setJwt] = useState();
    const [user,setUser] = useState();    
    const router= useRouter(); 
    const [loader,setLoader]=useState(false);

    const [referUserList, setReferUserList] = useState([]);

  const [fullname,setFullname] = useState();
  const [username,setUsername] = useState();
  const [fathername,setFathername] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [address,setAddress] = useState();
  const [usertype,setUserType] = useState();
  const [gender,setGendar] = useState();
  const [point,setPoint] = useState();
  const [packages,setPackage] = useState();
  const [level,setLevel] = useState();
  const [moneys,setMoneys] = useState();

  const [nomeneeName, setNomeneeName]=useState();
  const [nomeneePhone, setNomeneePhone]=useState();

  useEffect(()=>{
    try{
        const jwt = sessionStorage.getItem('jwt');
        setJwt(jwt)
        const user = JSON.parse(sessionStorage.getItem('user'));
        setUser(user)
        if(!jwt){
            router.replace('/')
        }
        
    } catch(err){
        console.log('geting data error')
    }
    getMyInfo();

},[]);



const getMyInfo= async()=>{

    const user = JSON.parse(sessionStorage.getItem('user'));
    const getMyInfo_= await GlobalApi.getMyData(user.id);
    
    
    console.log(getMyInfo_);
    setFullname(getMyInfo_.fullname)
    setUsername(getMyInfo_.username)
    setFathername(getMyInfo_.fathersname)
    setEmail(getMyInfo_.email)
    setPhone(getMyInfo_.phone)
    setAddress(getMyInfo_.address)
    setUserType(getMyInfo_.usertype)
    setGendar(getMyInfo_.gender)
    setPoint(getMyInfo_.mypoint)
    setPackage(getMyInfo_.mypackage)
    setLevel(getMyInfo_.mylevel)
    setMoneys(getMyInfo_.mymoney)
    setNomeneeName(getMyInfo_.nomeneename)
    setNomeneePhone(getMyInfo_.nomeneephone)

    try{
        const getAllReferUser_= await GlobalApi.getUserByRefer(getMyInfo_.username);
        console.log(getAllReferUser_);
        setReferUserList(getAllReferUser_);
        // getAllReferUser_.forEach(element => {
        //     console.log(element.id);
        //     console.log(element.email);
        //   })
    } catch(err){
        toast(err)
    }
    
}

const withdraw= ()=>{

}

  return (
    <div className=''>
            <h2 className='p-3 bg-primary text-xl font-bold text-center'>User Profile</h2>
            <div className='p-5 px-5 md:px-10 py-8 justify-center'>
                
                <div className='mx-10 border '>
                    <h2 className='p-3 bg-gray-200 font-bold text-center text-3xl'>{fullname}</h2> 
                    <div className='bg-gray-200 flex justify-center gap-2 mb-4 '>
                        {/* <h2>Point: {point}</h2> */}
                        <h2>Package: {packages}</h2>
                        <h2>Level: {level}</h2>
                        <h2>Money: {moneys}</h2>
                        <h2>Refer: {referUserList.length}</h2>
                    </div>

                    <div className='p-4 flex flex-col gap-4 justify-center'>

                        <h2 className='flex justify-between text-bold'> Username: <span>{username}</span></h2>
                        <h2 className='flex justify-between text-bold'> Email Address: <span>{email}</span></h2>
                        <h2 className='flex justify-between text-bold'> Phone Number: <span>{phone}</span></h2>
                        <h2 className='flex justify-between text-bold'> Father's Name: <span>{fathername}</span></h2>
                        <h2 className='flex justify-between text-bold'> Address: <span>{address}</span></h2>
                        <h2 className='flex justify-between text-bold'> User Type: <span>{usertype}</span></h2>
                        <h2 className='flex justify-between text-bold'> Gendar: <span>{gender}</span></h2>
                        <h2 className='flex justify-between text-bold'> Refer Id: (Same as username) <span>{username}</span></h2>
                        <h2 className='flex justify-between text-bold'> Nomenee Name: <span>{nomeneeName}</span></h2>
                        <h2 className='flex justify-between text-bold'> Nomenee Phone: <span>{nomeneePhone}</span></h2>
                        
                        <h2>After 1000 on money, you can withdraw.</h2>
                        {/* <Input placeholder='Txn Id'  /> */}
                        <Button disabled={!(moneys > 1000)} onClick={()=>withdraw()} >{loader? <LoaderIcon className="animate-spin" />:'Withdraw'} </Button>
                    </div>
                </div>
            </div>
            <div className='p-5 px-5 md:px-10 py-8 justify-center'>
                <h2 className='text-2xl justify-center text-center'> All refer list </h2>
                <h2>Your Refer Id is {username} </h2>
                <div className='mx-10 border '>
                    <Table>
                        <TableCaption>A list of your refer member.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead className="text-right">Level</TableHead>
                            </TableRow>
                        </TableHeader>
                        {referUserList.map((refered,index)=>(
                        <TableBody key={index}>
                            <TableRow>
                            <TableCell className="font-medium">{refered.id}</TableCell>
                            <TableCell>{refered.username}</TableCell>
                            <TableCell>{refered.email}</TableCell>
                            <TableCell className="text-right">{refered.mylevel}</TableCell>
                            </TableRow>
                        </TableBody>
                        ))}
                    </Table>
                   </div> 
            
            </div>

        <div>
          

            </div>

        </div>
  )
}

export default profile