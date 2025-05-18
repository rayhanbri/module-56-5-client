import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    // console.log(coffees)
    return (
        <div>
             <div>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees}></CoffeeCard>)
                }
             </div>
        </div>
    );
};

export default Home;

