import React from 'react'
import { motion } from 'framer-motion'
import {figma} from '../../assets/index';
import {blender} from '../../assets/index';
import {adobeillustrator} from '../../assets/index';
import {csharp} from '../../assets/index';
import {css} from '../../assets/index';
import {unity} from '../../assets/index';
import { react } from '../../assets/index';
import { photoshop } from '../../assets/index';

export const AllSkills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 }}} className="w-full flex gap-20 mt-12">
      <div className="w-1/2">
        <div className="py-12">
          <p className="text-sm font-semibold text-title tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Design Skills</h2>
        </div>
        <div className="mt-5 w-full flex flex-col gap-6">
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[45px] h-[45px]'
                src={photoshop} alt="photoshop" />
              
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[80%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>80%</span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[40px] h-[45px]'
                src={blender} alt="blender" />
              
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[85%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>85%</span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[30px] h-[45px]'
                src={figma} alt="figma" />
              
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[90%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>90%</span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[45px] h-[45px]'
                src={adobeillustrator} alt="adobeillustrator" />
              
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[70%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>70%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>



      <div className="w-1/2">
        <div className="py-12">
          <p className="text-sm font-semibold text-title tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-5 w-full flex flex-col gap-6">
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[45px] h-[45px]'
                src={react} alt="react" />
              
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[60%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>60%</span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[45px] h-[45px]'
                src={csharp} alt="csharp" />
              
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[90%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>90%</span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[45px] h-[45px]'
                src={unity} alt="unity" />
              
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[100%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>100%</span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <div className='overflow-x-hidden'>
            <img className='w-[45px] h-[45px]'
                src={css} alt="css" />
             
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='w-[80%] h-full bg-gradient-to-r from-title via-hover to-detail rounded-md relative'>
                  <span className='absolute -top-9 right-0'>80%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
