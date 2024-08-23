import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool,MdCode,MdStarRate} from 'react-icons/md'

const Experience = () => {
  return (
<div name='experience' className='bg-gray-800'>
  <h2 className='min-h-fit flex-col flex 
    justify-start items-center px-5 
    text-center w-full  py-1 text-gray-50 
        text-3xl lg:text-8xl'><span className='pb-2 border-b-4 
        border-gray-500'>Education & Experience</span></h2>
        <VerticalTimeline lineColor='#87e793' animate={true}>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education text-lg'
        date='2017-2019'
        contentStyle={{ background: 'rgb(134, 150, 254)', color: '#FFF' }}
        
        iconStyle={{background:'#66cfff',color:'#fff'}}
        icon={<MdSchool/>}
        >
          <h3 className='vertical-timeline-element-title' >Sai International School</h3>
          <h4 className='vertical-timeline-element-subtitle'>Senior Secondary</h4>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education text-lg'
        date='2020-2024'
        contentStyle={{ background: 'rgb(134, 150, 254)', color: '#FFF' }}
        iconStyle={{background:'#66cfff',color:'#fff'}}
        icon={<MdSchool/>}
        >
          <h3 className='vertical-timeline-element-title '>Siksha 'O' Anusandhan</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bachelor Of Technology</h4>
          <p><span>Computer Science and Engineering</span><br/></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education text-lg'
        date='1st October 2022 - 31st October 2022'
        contentStyle={{ background: 'rgb(134, 150, 254)', color: '#FFF' }}
        iconStyle={{background:'#ff9347',color:'#fff'}}
        icon={<MdCode/>}
        >
          <h3 className='vertical-timeline-element-title'>HacktoberFest 2022</h3>
          <h4 className='vertical-timeline-element-subtitle'>Opensource</h4>
          <p>
          <span>Contributed to 10+ frontend projects enhancing user experiences , removing bugs
and expanding my development skills within the open-source community</span></p>
        </VerticalTimelineElement>


        <VerticalTimelineElement 
        className='vertical-timeline-element--education text-lg'
        date='5th May 2022 - 21st December 2022'
        contentStyle={{ background: 'rgb(134, 150, 254)', color: '#FFF' }}
        iconStyle={{background:'#f9cd69',color:'#fff'}}
        icon={<MdCode/>}
        >
          <h3 className='vertical-timeline-element-title'>SWOC S3</h3>
          <h4 className='vertical-timeline-element-subtitle'>Opensource</h4>
          <h4 className='vertical-timeline-element-subtitle'>Made 5+ impactful contributions to open-source React projects, fostering collaboration and
advancing the community's growth through an open-source program.</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<MdStarRate/>}
  />
      </VerticalTimeline>
      </div>
 
  );
};

export default Experience




































