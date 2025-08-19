import React from 'react'
import { Navbar, Typography } from '@material-tailwind/react';
import dairydietIcon from '../assets/header-icons/dairy-diet-eating-svgrepo-com.svg';
// import birthdayIcon from '../assets/header-icons/birthday-cake-svgrepo-com.svg';
// import milkIcon from '../assets/header-icons/milk-svgrepo-com.svg';
// import yogurtIcon from '../assets/header-icons/yogurt-svgrepo-com.svg';
// import breadIcon from '../assets/header-icons/bread-svgrepo-com.svg';
// import cheeseIcon from '../assets/header-icons/cheese-solid-svgrepo-com.svg';
// import icecreamIcon from '../assets/header-icons/ice-cream-svgrepo-com.svg';
// import eggIcon from '../assets/header-icons/eggs-svgrepo-com.svg';
// import mustardIcon from '../assets/header-icons/mustard-svgrepo-com.svg';

import birthdayIcon from '../assets/header-icons/birthdaycolorIcon.svg';
import milkIcon from '../assets/header-icons/milkcolorIcon.svg';
import yogurtIcon from '../assets/header-icons/yogurtcolorIcon.svg';
import breadIcon from '../assets/header-icons/breadcolorIcon.svg';
import cheeseIcon from '../assets/header-icons/cheesecolorIcon.svg';
import icecreamIcon from '../assets/header-icons/icecreamcolorIcon.svg';
import eggIcon from '../assets/header-icons/eggcolorIcon.svg';
import mustardIcon from '../assets/header-icons/mustardcolorIcon.svg';

const LINKS = [
    {
        icon: eggIcon,
        title: "Egg",
        href: "#",
    },
    {
        icon: milkIcon,
        title: "Milk",
        href: "#",
    },
    {
        icon: mustardIcon,
        title: "Mustard",
        href: "#",
    },
    {
        icon: breadIcon,
        title: "Bread",
        href: "#",
    },
    {
        icon: yogurtIcon,
        title: "Yogurt",
        href: "#",
    },
    {
        icon: birthdayIcon,
        title: "Birthday",
        href: "#",
    },
    {
        icon: cheeseIcon,
        title: "Cheese",
        href: "#",
    },
    {
        icon: icecreamIcon,
        title: "Ice-Cream",
        href: "#",
    },
    {
        icon: dairydietIcon,
        title: "Dairy Diet",
        href: "#",
    },
];

const NavList = () => {
    return (
        <ul className='mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center lg:flex-wrap lg:justify-center'>
            {LINKS.map(({ icon, title, href }, index) => (
                <li key={index}>
                    <Typography
                        as="a"
                        href={href}
                        type='small'
                        className='flex items-center gap-x-2 p-1 hover:text-primary'
                    >
                        <img className="h-8 w-8" src={icon} alt="Network Error" />
                        {title}
                    </Typography>
                </li>
            ))}
        </ul>
    );
}

const SubHeaderComp = () => {
    return (
        <>
            <Navbar className='mx-auto w-full max-w-screen-xl h-max'>
                <div className='flex items-center justify-center'>
                    <div className='hidden lg:block'>
                        <NavList />
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default SubHeaderComp
