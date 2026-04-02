import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ToolsCard = ({tool,carts,setCarts}) => {
      const [isBuy,setIsBuy] = useState(false)

      const handleAdd = () => {
        setIsBuy(true)

        const isFound = carts.find(item => item.id === tool.id)

        if (isFound) {
            toast.error("This item already in cart!")
            return
        }
        setCarts([...carts, tool])
        toast.success("Item added to cart")
      }
    return (
    <div className='space-y-3 shadow-md p-5 rounded-lg relative'>
               <div className=''>
                <img className='w-30 h-30 object-contain hover:scale-105 transition-all' src={tool.image}/>
               </div>
               <div>
                <h2 className='text-2xl font-bold'>{tool.name}</h2>
                <p>{tool.description}</p>
                </div>
                <div className='flex items-end gap-[2px]'>
                    <h2 className='text-2xl font-bold'>${tool.price}</h2>
                    <p>/{tool.period}</p>
                </div>
                <p className='absolute top-3 left-75'>{tool.tagType}</p>
                <p>{tool.features}</p>
               <button onClick={handleAdd} className='btn w-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white'>{isBuy ? "Add to Cart" : "Buy Now"}</button>
                </div>
    );
};

export default ToolsCard;