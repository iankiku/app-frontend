import React from 'react'



//* / Site Layout
export const Layout = (props) => {


    return (
        <div id="outer-layout" class="h-screen w-screen flex">

            {props.children}

        </div>
    );
}


export const ContentLayout = (props) => {

    return (
        <div id="content-layout" class="w-screen">
            {props.children}
        </div>
    )
}

