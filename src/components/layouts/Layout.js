import React from 'react'



//* / Site Layout
export const AppLayout = (props) => {


    return (
        <div>
            <span className="btn">Like</span>

            {props.children}

        </div>
    );
}