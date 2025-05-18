import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffe = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const handleUpdateCoffee = () =>{
    }
    return (
     <div className='p-24'>
            <div className='p-12 space-y-10'>
                <h1 className='text-6xl font-semibold'>Update Coffee</h1>
                
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* name field  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffe Name" />
                    </fieldset>

                    {/* chef field  */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input" placeholder="Enter coffee quantity" />
                    </fieldset>

                    {/* Supplier filed  */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Supplier</label>
                        <input type="text" name='Supplier' className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>

                    {/* TAste field  */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Taste</label>
                        <input type="text" name='Taste' className="input" placeholder="Enter coffee taste" />
                    </fieldset>

                    {/* Category field  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>

                    {/* details field  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Details</label>
                        <input type="text" name='Details' className="input" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* photo url field  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-3 w-full  border p-4">

                    <label className="label">Photo</label>
                    <input type="text" name='Photo' className="input w-full" placeholder="Enter photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full bg-[#D2B48C]' value="Update Coffee" />



            </form>
        </div>
    );
};

export default UpdateCoffe;