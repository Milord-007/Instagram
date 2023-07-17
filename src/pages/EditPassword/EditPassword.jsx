import React from 'react'
import meta from './img/meta.png'
import { Link } from 'react-router-dom'

const EditPassword = () => {
    return (
        <div className='bg-[#EFEFEF] dark:bg-[#000] dark:text-white py-[50px]'>
            <div className=" w-[80%] mx-auto dark:bg-[#000] dark:text-white">
                <div className='bg-[white] py-[30px] dark:bg-[#000] dark:text-white'>
                    <div className='w-[80%] mx-auto dark:bg-[#000] dark:text-white' >
                        <div className='flex  justify-between '>
                            <div className='w-[23%] md:hidden'>
                                <div>
                                    <Link to={"/editProfile"}> <h1 className='font-bold'> Edit profile </h1> </Link>
                                    <p className='font-bold mt-[30px]'> Change password </p>
                                </div>
                                <div className='mt-[100px]'>
                                    <div>
                                        <div>
                                            <img src={meta} alt="" />
                                        </div>
                                        <div className='mt-[10px]'>
                                            <p className='text-[#0095F6] font-bold'> Accounts center </p>
                                            <p> Control settings for connected experiences on Instagram, the Facebook app, and Messenger, including sharing stories and posts, and logging in. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[70%] md:w-full'>
                                <div className='w-[70%] md:w-full'>
                                    <div className='flex gap-[20px] items-center'>
                                        <div className='py-[45px] w-[90px] rounded-[50%] bg-[#C4C4C4]'></div>
                                        <div>
                                            <p className='text-[24px] font-bold'> Ardasher </p>
                                            <p className='text-[#0095F6]'> Change profile photo </p>
                                        </div>
                                    </div>
                                    <div className='flex  gap-[60px] md:gap-0 mt-[20px]'>
                                        <p className='font-bold text-[18px]'> Previous password </p>
                                        <div>
                                            <input placeholder='Previous Password' className='pl-[20px] border-[2px] py-[6px] rounded-[5px] md:w-full w-[250px]' type="text" />
                                            {/* <p className='mt-[10px]'> To help people discover your account, use the name people know you by, whether it's your full name, nickname, or business name. You can only change your name twice within a 14-day period. </p> */}
                                        </div>
                                    </div>
                                    <div className='flex  gap-[92px] md:gap-0 mt-[30px]'>
                                        <p className='font-bold text-[18px]'> New password </p>
                                        <div>
                                            <input placeholder='New Password' className='pl-[20px] border-[2px] py-[6px] rounded-[5px] md:w-full  w-[250px]' type="text" />
                                            {/* <p className='mt-[10px]'> In most cases, you will be able to change your username back to johndoe for an additional 14 days. More information </p> */}
                                        </div>
                                    </div>
                                    <div className='flex  gap-[20px] md:gap-0 mt-[30px]'>
                                        <p className='font-bold text-[18px]'> Confirm new password </p>
                                        <div>
                                            <input placeholder='Confirm new password' className='pl-[20px] md border-[2px] py-[6px] rounded-[5px] md:w-full w-[250px]' type="text" />
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-[20px]'>
                                        <button className='bg-[#0095F6] px-[20px] ml-[105px] py-[7px] rounded-[5px] text-[white]'> Change password </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPassword