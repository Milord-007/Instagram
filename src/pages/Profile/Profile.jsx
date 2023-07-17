import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import pic from './360660361_1033268351181396_7342511473499039938_n.jpg'

function Profile() {
  return (
    <div className='md:pt-[17%]  w-full   dark:bg-[#000] dark:text-white '>

      <div className='w-full '>
        <div className='flex w-[80%] mx-auto pt-[50px] md:flex-col'>
          <div className='w-[40%] md:w-full md:items-center flex justify-center md:gap-x-5'>
          <Avatar alt="Milord" src={pic}  sx={{ width: 160, height: 160 }} />
          <div className='hidden md:block'>
            
            <div className='flex justify-evenly' >milord__007
            <Link to={'/editPassword'}>
            <svg aria-label="Параметры" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Параметры</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            <svg aria-label="Параметры" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(245, 245, 245)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Параметры</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            </Link>

            </div>
          
           
            
            <div className='pt-5'>
            <div>
              <Link to={"/editProfile"}>
                <button className='p-2 rounded-lg bg-[#EFEFEF] text-[#000] dark:text-white dark:bg-[#262626] text-[14px] font-[600]'>Редактировать профиль</button>
                </Link>
                </div>


            </div>
          </div>
      


          </div>

          <div className='w-[50%] md:w-full'>
              <div className='flex justify-evenly items-center md:hidden'>
                <div>milord__007</div>
                <div><Link to="/editProfile"><button className='p-2 rounded-lg bg-[#EFEFEF] text-[#000] text-[14px] font-[600]'>Редактировать профиль</button></Link></div>
                <div>
                  <Link to={"editPassword"}>
                <svg aria-label="Параметры" className="x1lliihq x1n2onr6 dark:hidden" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Параметры</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                <svg aria-label="Параметры" className="x1lliihq x1n2onr6 hidden dark:block" color="rgb(245, 245, 245)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Параметры</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </Link>
                </div>
              </div>

              <div className='flex justify-between pt-5 md:hidden'>
                <p>0 публикаций</p>
                <p>944 подписчиков</p>
                <p>1 068 подписок</p>
              </div>

              <div className='pt-5'>
                <p>Ardasher Bobokalonov</p>
                <p className='pt-2'>💻Programmer(Front-end) <br />-Engineer <br /> - Problem Solver  <br /> - Continuous Learner <br /> - Analytical Thinker <br />- Detail-oriente <br /> - Creative Thinking</p>
              </div>
          </div>

      </div>
      <div className='flex pl-4 gap-x-8 pt-8 w-[80%] mx-auto border-b-2 pb-[30px]'>
          <div>
          <Avatar alt=""  sx={{ width: 80, height: 80 }} />
          <p>Актуальное</p>
         </div>

         <div>
          <Avatar alt=""  sx={{ width: 80, height: 80 }} />
          <p>Актуальное</p>
         </div>

         <div>
          <Avatar alt=""  sx={{ width: 80, height: 80 }} />
          <p>Актуальное</p>
         </div>
      </div>

      </div>
        <div>
        </div>
    </div>
  )
}

export default Profile