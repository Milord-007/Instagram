import React from 'react'
import "./Home.css"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from '@mui/material/Avatar';
import me from './images/me.jpg'
import pool from './images/photo_2023-07-16_09-50-44.jpg'
import video from './images/video_2023-07-16_09-51-13.mp4'

function Home() {
  return (
    <div className='md:pt-[17%] pl-[10%] md:p-2  overflow-x-hidden dark:bg-[#000] dark:text-white flex  '>
      <div className='w-[65%] md:p-0 pl-[12%] md:w-full'>
        <div className='w-full  pt-10 flex overflow-x-scroll gap-x-4 stories'>
          <div>
            <Avatar alt="Milord" src={me}   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>
          <div>
            <Avatar alt="" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>

          <div>
            <Avatar alt="Milord" src={me}   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>
          <div>
            <Avatar alt="" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>

          <div>
            <Avatar alt="Milord" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>
          <div>
            <Avatar alt="" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>

          <div>
            <Avatar alt="Milord" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>
          <div>
            <Avatar alt="" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>

          <div>
            <Avatar alt="Milord" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>
          <div>
            <Avatar alt="" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>

          <div>
            <Avatar alt="Milord" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>
          <div>
            <Avatar alt="" src="/static/images/avatar/1.jpg"   sx={{ width: 70, height: 70 }} />
            <p className='text-[12px]'>milord__007</p>
          </div>
      
        </div>

        <div className='w-[60%] mx-auto pt-[30px]'>
          <div>

             <div className='flex '>
                 <div className='w-[50%]'>
                 <div className='flex items-center gap-x-2'>
               <Avatar alt="Milord" src={me}  sx={{ width: 50, height: 50 }} />
               <div>
               <p className='text-[12px] font-[600]'>milord__007   </p>
               <p className='text-[12px]'>Dushanbe,Tajikistan</p>
               </div>
             </div>
                 </div>

                 <div className='w-[50%] flex justify-end items-end'>
                  <MoreHorizIcon className='dark:text-white '/>
                 </div>
             </div>
             <div className='h-[70vh] mt-1 bg-[grey]'>
             {/* <video src={video} className="h-full w-full" controls /> */}
               <img src={pool} alt="" className="h-full w-full"/>
             </div>
             <div className='pt-2 flex justify-between'>
              <div className='flex gap-x-3'>
             <svg aria-label="Уведомления" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Уведомления</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
             <svg aria-label="Уведомления" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Уведомления</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
              
             <svg aria-label="Комментировать" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
             <svg aria-label="Комментировать" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

             <svg aria-label="Поделиться публикацией" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Поделиться публикацией</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
             <svg aria-label="Поделиться публикацией" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Поделиться публикацией</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

              </div>
              <div>
              <svg aria-label="Сохранить" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              <svg aria-label="Сохранить" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>


             </div>
             <div className='pt-2'>
              <input type="text" placeholder='Добавьте коментарий...' className='w-full border-0 p-2 dark:bg-[#262626] rounded-lg' />
             </div>
             <hr />
          </div>

          <div>

<div className='flex  pt-5'>
    <div className='w-[50%]'>
    <div className='flex items-center gap-x-2'>
  <Avatar alt="Milord" src="/static/images/avatar/1.jpg"   sx={{ width: 50, height: 50 }} />
  <div>
  <p className='text-[12px] font-[600]'>milord__007   </p>
  <p className='text-[12px]'>Dushanbe,Tajikistan</p>
  </div>
</div>
    </div>

    <div className='w-[50%] flex justify-end items-end'>
     <MoreHorizIcon className='dark:text-white '/>
    </div>
</div>
<div className='h-[70vh] mt-1 bg-[grey]'>
{/* <video src={video} className="h-full w-full" controls /> */}
<video src={video} className="h-full w-full"  autoPlay loop muted/>

  {/* <img src={pool} alt="" className="h-full w-full"/> */}
</div>
<div className='pt-2 flex justify-between'>
 <div className='flex gap-x-3'>
<svg aria-label="Уведомления" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Уведомления</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
<svg aria-label="Уведомления" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Уведомления</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
 
<svg aria-label="Комментировать" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
<svg aria-label="Комментировать" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

<svg aria-label="Поделиться публикацией" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Поделиться публикацией</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
<svg aria-label="Поделиться публикацией" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Поделиться публикацией</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

 </div>
 <div>
 <svg aria-label="Сохранить" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
 <svg aria-label="Сохранить" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
 </div>


</div>
<div className='pt-2'>
 <input type="text" placeholder='Добавьте коментарий...' className='w-full border-0 p-2 dark:bg-[#262626] rounded-lg' />
</div>
<hr />


<div className='flex  pt-5'>
    <div className='w-[50%]'>
    <div className='flex items-center gap-x-2'>
  <Avatar alt="Milord" src="/static/images/avatar/1.jpg"   sx={{ width: 50, height: 50 }} />
  <div>
  <p className='text-[12px] font-[600]'>milord__007   </p>
  <p className='text-[12px]'>Dushanbe,Tajikistan</p>
  </div>
</div>
    </div>

    <div className='w-[50%] flex justify-end items-end'>
     <MoreHorizIcon className='dark:text-white '/>
    </div>
</div>
<div className='h-[70vh] mt-1 bg-[grey]'>
{/* <video src={video} className="h-full w-full" controls autoPlay loop muted/> */}
  <img src={pool} alt="" className="h-full w-full"/>
</div>
<div className='pt-2 flex justify-between'>
 <div className='flex gap-x-3'>
<svg aria-label="Уведомления" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Уведомления</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
<svg aria-label="Уведомления" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Уведомления</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
 
<svg aria-label="Комментировать" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
<svg aria-label="Комментировать" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

<svg aria-label="Поделиться публикацией" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Поделиться публикацией</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
<svg aria-label="Поделиться публикацией" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Поделиться публикацией</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

 </div>
 <div>
 <svg aria-label="Сохранить" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
 <svg aria-label="Сохранить" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
 </div>


</div>
<div className='pt-2'>
 <input type="text" placeholder='Добавьте коментарий...' className='w-full border-0 p-2 dark:bg-[#262626] rounded-lg' />
</div>
<hr />


</div>


           
        </div>

      </div>
      <div className='w-[35%] h-[80vh] md:hidden flex flex-col justify-center pt-[40px]  px-2 '>
         <div className='flex items-center justify-center gap-x-3 '>
          <div>

           <Avatar alt="Milord" src={me}   sx={{ width: 60, height: 60 }} />
          </div>
           <div className='flex flex-col'>
           <span className='font-[600]'>milord__007</span>
            <span>Ardasher Bobokalonov</span>
           </div>
         </div>
           <p className='text-end pr-3 text-[#0066ff]'>Переключиться</p>

           <div className='flex justify-between pt-6'>
            <span>Рекомендации для вас</span>
            <span>Все</span>

           </div>
            <div className='pt-5 flex gap-x-3'>
            <Avatar alt="Milord" src={me}   sx={{ width: 40, height: 40 }} />
            <div className='flex flex-col'>
           <span className='font-[600]'>milord__007</span>
            <p className='text-[grey]'>Подписан(-а) eur1725 <span className='pl-[20px] text-[#0066ff]'>Подписаться</span></p>
           </div>
          
            </div>

            <div className='pt-5 flex gap-x-3'>
            <Avatar alt="Milord" src={me}   sx={{ width: 40, height: 40 }} />
            <div className='flex flex-col'>
           <span className='font-[600]'>milord__007</span>
            <p  className='text-[grey]'>Подписан(-а) eur1725 <span className='pl-[20px] text-[#0066ff]'>Подписаться</span></p>
           </div>
          
            </div>

            <div className='pt-5 flex gap-x-3'>
            <Avatar alt="Milord" src={me}   sx={{ width: 40, height: 40 }} />
            <div className='flex flex-col'>
           <span className='font-[600]'>milord__007</span>
            <p  className='text-[grey]'>Подписан(-а) eur1725 <span className='pl-[20px] text-[#0066ff]'>Подписаться</span></p>
           </div>
          
            </div>


            <p  className='text-[grey] pt-[50px]'>
              Информация
              Помощь
              Пресса
             API
             Вакансии
             Конфиденциальность
             Условия
             Места
             Язык

             Meta Verified
            </p>
      </div>
    </div>
  )
}

export default Home