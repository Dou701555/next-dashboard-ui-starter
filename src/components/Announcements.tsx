import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white rounded-lg p-4'>
<div className="flex justify-between items-center">
<h1 className='font-semibold'>Announcements</h1>
<span className='text-gray-400 text-sm'>View All</span>
</div>
<div className="flex flex-col mt-4 gap-4">
<div className="bg-lamaSkyLight rounded-md p-4">
<div className="flex justify-between items-center">
  
  <h1 className='font-medium'>Lorem</h1>
<span className='text-xs text-gray-400 bg-white px-1 py-1 rounded-md'>22-06-24</span>
</div>
<p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laudantium numquam illo alias aut,</p>
</div>

<div className="bg-lamaYellowLight rounded-md p-4">
<div className="flex justify-between items-center">
  
  <h1 className='font-medium'>Lorem</h1>
<span className='text-xs text-gray-400 bg-white px-1 py-1 rounded-md'>22-06-24</span>
</div>
<p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laudantium numquam illo alias aut,</p>
</div>



<div className="bg-lamaPurpleLight rounded-md p-4">
<div className="flex justify-between items-center">
  
  <h1 className='font-medium'>Lorem</h1>
<span className='text-xs text-gray-400 bg-white px-1 py-1 rounded-md'>22-06-24</span>
</div>
<p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laudantium numquam illo alias aut,</p>
</div>

</div>
    </div>
  )
}

export default Announcements;