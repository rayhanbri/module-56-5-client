import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialcoffees = useLoaderData();
    // console.log(coffees)
    const [coffees,setcoffees] = useState(initialcoffees);
  
     

    return (
        <div>
             <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id}
                        coffees={coffees}
                        setcoffees={setcoffees}
                         coffee={coffee}
                         ></CoffeeCard>)
                }
             </div>
        </div>
    );
};

export default Home;

