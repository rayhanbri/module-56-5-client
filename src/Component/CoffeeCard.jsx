import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { Photo, name, price, quantity } = coffee;
    // console.log(coffee.)
    return (
        <div className="card card-side  shadow-sm bg-[#F5F4F1]">
            <figure>
                <img
                    src={Photo}
                    alt="Movie" />
            </figure>
            <div className="flex mt-6 w-full justify-around">
               <div className='space-y-2 mt-2'>
                 <h2 >Name:{name}</h2>
                <p>Quantity:{quantity}</p>
                <p>Price:{price}</p>
               </div>
                <div className="card-actions justify-end ">
                    <div className="join join-vertical space-y-3" >
                        <button className="btn join-item">View</button>
                        <button className="btn join-item">Edit</button>
                        <button className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;