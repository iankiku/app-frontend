import React from 'react';





export const Header = () => {

    return (
        <header class="text-gray-50 body-font bg-gray-900  h-32">
            <div class="container mx-auto">


                <a href="#" className="flex space-x-5">
                    <img src="" alt="logo" />

                    <h1 class="order-1 text-gray-50 text-3xl font-extrabold tracking-tight mt-2">Ian Kiku</h1>
                </a>

                <h2 class="order-1 text-gray-50 text-3xl font-extrabold tracking-tight mt-2">Full-stack Developer</h2>

                <div className="flex mx-auto">
                    <span>Backend Developer | </span>
                    <span> Frontend Developer</span>
                </div>




            </div >
        </header >


    );
}
