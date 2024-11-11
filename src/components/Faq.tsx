  
import minusIcon from '../assets/icon-minus.svg'
 import plusIcon from '../assets/icon-plus.svg'


 type FaqProps = {
    title : string,
    answer : string,
    id : number, 
    isOpen : boolean 
    onToggle : (id : number) => void
 }

function Faq({title, answer, id ,isOpen, onToggle} : FaqProps) {
   

  

  return (
    <article>
       <div onClick={()=> onToggle(id)}   className='flex justify-between items-center gap-4 mb-5'>
        <h3 className='text-darkPurple text-lg font-semibold hover:text-purple-500 cursor-pointer'  >{title}</h3>
        <div> 
            {isOpen ? <img src={minusIcon} alt="minusIcon" /> : <img src={plusIcon} alt="plusIcon" />}
             
        </div>
       </div>
       <div className='text-base text-greyPurple'>
         {isOpen && answer}
       </div>
    </article>
  )
}

export default Faq