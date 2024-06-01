import React from 'react'


export const SkillInfo = ({title, subtitle, description, result}) => {
  return (
    <div className='w-full h-1/3 group flex'>
        <div className='w-10 h-[6px] mt-16 relative bg-hover'>
            <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center
            items-center bg-title bg-opacity-80'>
                <span className='w-3 h-3 rounded-full bg-hover inline-flex
            group-hover:bg-detail duration-300'></span></span>
            
        </div>
        <div className='w-full bg-hover bg-opacity-70 hover:bg-opacity-60 duration-300
        rounded-lg px-10 flex flex-col justify-center gap-10 shadow-sm'>
            <div>
            <h3 className='text-2xl font-semibold group-hover:text-title duration-300'>{title}</h3>
            <p className='text-sm mt-2 group-hover:text-title duration-300'>
            {subtitle}</p>
            <p className='text-sm mt-2 text-title'>{result}</p>
            </div>
            <div>
            <p className='text-base font-medium text-title group-hover:text-detail duration-300'>{description}</p>
            </div>
        </div>
    </div>

    
  )
}
