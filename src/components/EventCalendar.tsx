"use client"

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
///TEMPORARY
const events = [
{
    id:1,
    titel:"Mecanique",
    time:"12:00 PM - 2:00 PM",
    description:" Lorem lorem lorem 1",
},
{
    id:2,
    titel:"Electrique",
    time:"12:00 PM - 2:00 PM",
    description:" Lorem lorem lo 2",
},
{
    id:3,
    titel:"Pneumatique",
    time:"12:00 PM - 2:00 PM",
    description:" Lorem lorem lorem 3",
},

];


const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
   
  return (
    <div className="bg-white p-4 rounded-lg"><Calendar onChange={onChange} value={value} />
    <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center ">
<h1 className="text-xl  font-semibold ">Events</h1>
<Image src="/moreDark.png" alt="" width={20} height={20}/>


        </div>
{events.map(event=>(

    <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
<div className="flex items-center justify-between">
<h1 className="font-semibold text-gray-600">{event.titel}</h1>
<span className="text-gray-400 text-xs">{event.time}  </span>

</div>
<p className="mt-4 text-gray-400 text-sm">{event.description} </p>
    </div>
))}


    </div>
    
    </div>
  
  )
}

export default EventCalendar;