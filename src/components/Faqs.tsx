 import starIcon from '../assets/icon-star.svg'
import Faq from './Faq'

import data from '../data'
import { useState } from 'react'

function Faqs() {
   const [selectedId, setSelectedId] = useState<number | null>(null)
   
   function handleToggle(id: number){
     setSelectedId(prev => prev === id ? null : id )
   }
    
  return (
    <section className='bg-white shadow-md -mt-20 max-w-3xl mx-6 sm:mx-auto p-6 rounded-xl'>
        <header className='flex gap-3 items-center mb-10'>
            <img src={starIcon} alt="starIcon" className='block w-7 h-7'/>
            <h1 className='text-3xl text-darkPurple font-bold'>FAQs </h1>
        </header>
        <div className='flex flex-col gap-4'>
           {data.map( item => <Faq key={item.id} title={item.title} answer={item.answer} id={item.id}
            isOpen={selectedId === item.id} onToggle={handleToggle}/>)}
        </div>
    </section>
  )
}

export default Faqs