
import { use } from 'react';
import ToolsCard from './ToolsCard';

const Tools = ({ToolsPromise,carts,setCarts}) => {
    const tools = use(ToolsPromise)
    // console.log(tools)
 

    return (
          <div className='py-20 max-w-7xl mx-auto'>
          <div className='text-center'>
             <h2 className='text-5xl font-bold'>Premium Digital Tools</h2> 
            <p className='mt-5'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 shadow-lg p-5 rounded-lg'>
            {tools.map((tool) =>(
                <ToolsCard key={tool.id}  tool={tool} carts={carts} setCarts={setCarts}/>
            ) )}
          </div>
         
        </div>
    );
};

export default Tools;