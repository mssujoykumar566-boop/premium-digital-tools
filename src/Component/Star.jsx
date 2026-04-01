import React from 'react';

const Star = () => {
    return (
     <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-10 px-6 md:px-16">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-white">
    
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
      <p className="mt-1">Active Users</p>
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
      <p className="mt-1">Premium Tools</p>
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
      <p className="mt-1">Rating</p>
    </div>

  </div>

</div>
    );
};

export default Star;