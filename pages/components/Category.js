/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'
import saree from '../../public/saree3.png'
import jacket from '../../public/jacket.png'
import lehenga from '../../public/lehenga3.png'
import borkha from '../../public/Muskhita.png'
import borkha1 from '../../public/Muskhiya2.png'
import twopice from '../../public/two-pice3.png'

const Category = () => {
    const category = [
        {
            name: "Saree Collection",
            img: saree
        },
        {
            name: "Borkha Collection",
            img: borkha
        },
        {
            name: "Two-pice Collection",
            img: twopice
        },
        {
            name: "Jacket Collection",
            img: jacket
        },
        {
            name: "Lehenga Collection",
            img: lehenga
        }
    ]
    return (
        <div className="relative">
            <div className='grid grid-cols-3 md:grid-cols-5 gap-4 pb-10 px-2 absolute md:-top-80'>

                {
                    category?.map((ct, idx) => {
                        return (
                            <div className="relative max-h-96 rounded-lg  shadow-xl bg-white" key={idx}>
                                <Image
                                    src={ct.img}
                                    alt=""

                                    objectFit='contain'
                                    className="rounded-t-lg  object-fill"
                                />
                                {/* card header */}
                                <button className="absolute bottom-0 left-0 mt-10 text-center w-full bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                    {ct.name}
                                </button>

                            </div>
                        )
                    })
                }


            </div>
        </div>
    );
};

export default Category;