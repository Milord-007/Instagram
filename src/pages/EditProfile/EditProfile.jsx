import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
// import pic from './360660361_1033268351181396_7342511473499039938_n.jpg'

function EditProfile() {
  return (
    <div className='md:pt-[17%]  w-full  pb-[30px] dark:bg-[#000] dark:text-white '>
      <p className='text-[26px] pt-8 pl-8'>Настройки</p>
      <div className='w-full '>
        <div className='flex w-[80%] border-2 mt-[50px] mx-auto md:flex-col'>
        <div className='w-[30%] border-r-2 p-7 md:hidden'>
            <p>Центр аккаунтов</p>
            <p>Управляйте кросс-сервисными функциями и настройками аккаунтов на платформах Meta.</p>

        </div>
        <div className='w-[70%] pt-[10px] md:w-full'>
            <p className='text-[20px] pl-5'>Редактировать профиль</p>


            <div className='flex w-[80%] mx-auto gap-x-[30px] pt-[30px]'>
                <div>
                    <Avatar></Avatar>
                </div>
                 <div>
                    <p>milord__007</p>
                    <button className='text-[#4f52f7] text-[14px]'>Изменить фото профиля</button>
                 </div>
            </div>

            <div className='flex w-[80%] mx-auto gap-x-[30px] pt-[30px]'>
                <div>
                    <p>Сайт</p>
                </div>
                 <div className='flex flex-col'>
                     <input type="text" className='rounded-lg p-1 border-none dark:bg-[#262626]' placeholder='Сайт'/>
                    <p className='text-[14px] mt-2'>Изменить ссылки можно только в мобильной версии. Перейдите в приложение Instagram и коснитесь "Редактировать профиль".</p>
                 </div>
            </div>
            <div className='flex w-[80%] mx-auto gap-x-[30px] pt-[30px]'>
                <div className='w-[30%]'>
                    <p>О себе</p>
                </div>
                 <div className='flex flex-col'>
                     <textarea type="text" className='rounded-lg p-2 border-none dark:bg-[#262626]' placeholder=''/>
                    <p className='text-[14px] mt-2'>Изменить ссылки можно только в мобильной версии. Перейдите в приложение Instagram и коснитесь "Редактировать профиль".</p>
                 </div>
            </div>

            <div className='flex w-[80%] mx-auto gap-x-[30px] pt-[30px]'>
                <div className='w-[30%]'>
                    <p>Пол</p>
                </div>
                 <div className='flex flex-col'>
                 <input type="text" className='rounded-lg p-1 border-none dark:bg-[#262626]' placeholder='Предпочитаю не указывать'/>

                     {/* <textarea type="text" className='rounded-lg p-2 border-none dark:bg-[#262626]' placeholder=''/> */}
                    <p className='text-[14px] mt-2'>Изменить ссылки можно только в мобильной версии. Перейдите в приложение Instagram и коснитесь "Редактировать профиль".</p>
                 </div>
            </div>

        </div>


      </div>
    

      </div>
        
    </div>
  )
}

export default EditProfile