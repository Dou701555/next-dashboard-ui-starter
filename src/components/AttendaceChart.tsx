
"use client"
import Image from 'next/image'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present:30,
    Absent:70,
    
  },
  {
    name: 'Tue',
    Present: 60,
    Absent: 50,
    
  },
  {
    name: 'Wed',
    Present: 40,
    Absent: 30,
    
  },
  {
    name: 'Thu',
    Present: 60,
    Absent: 40,
    
  },
  {
    name: 'Fri',
    Present: 40,
    Absent: 60,
    
  },

];


const AttendaceChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 w-full h-full  '>
{/*TITEL*/}
<div className=" flex justify-between items-center">
<h1 className='font-bold'>Attendace</h1>
<Image src="/moreDark.png" alt="" width={20} height={20}/>

</div>
<ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
         barSize={20}
      
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"  />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false}/>
          <Tooltip />
          <Legend  align="left" verticalAlign="top"  wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}  />
          <Bar dataKey="Present" fill="#FAE27C" activeBar={<Rectangle/>} legendType="circle" radius={[10,10,0,0]} />
          <Bar dataKey="Absent" fill="#C3EBFA" activeBar={<Rectangle/>} legendType="circle"  radius={[10,10,0,0]}/>
          
        </BarChart>
      </ResponsiveContainer>
      </div>

    
  )
}

export default AttendaceChart