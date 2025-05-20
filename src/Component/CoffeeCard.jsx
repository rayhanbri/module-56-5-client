import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setcoffees }) => {
    const { _id, Photo, name, price, quantity } = coffee;
    // console.log(coffee.)

    const handleDelete = (_id) => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // eita ami add korchi 
                // start dleleting coffee +
                // jai url banai asi kemon server theke 


                fetch(`https://module-56-server-pink.vercel.app/coffees/${_id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // console.log('dete function' ,data)
                    if(data.deletedCount){
                        
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                });
                const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                setcoffees(remainingCoffees);

                    }
                })



            }
        });


    }


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
                        <Link to={`/coffees/${_id}`}>
                        <button className="btn join-item">View</button>
                        </Link>
                        <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;