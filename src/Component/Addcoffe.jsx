import React from 'react';

const Addcoffe = () => {
    const handleAddCoffee= e =>{
        e.preventDefault()
        
        const form = e.target;
        console.log('wow')
    }
    return (
        <div className='p-24'>
            <div className='p-12 space-y-10'>
                <h1 className='text-6xl font-semibold'>Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* name field  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffe Name" />
                    </fieldset>

                    {/* chef field  */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Chef</label>
                        <input type="text" className="input" placeholder="Enter coffee chef" />
                    </fieldset>

                    {/* Supplier filed  */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Supplier</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>

                    {/* TAste field  */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Taste</label>
                        <input type="text" className="input" placeholder="Enter coffee taste" />
                    </fieldset>

                    {/* Category field  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Category</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter coffee category" />
                    </fieldset>

                    {/* details field  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Details</label>
                        <input type="text" className="input" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* photo url field  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-3 w-full  border p-4">

                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" placeholder="Enter photo URL" />
                </fieldset>

                <input type="submit"  className='btn w-full bg-[#D2B48C]' value="Add Coffee" />



            </form>
        </div>
    );
};

export default Addcoffe;