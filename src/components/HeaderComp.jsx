import { Navbar, Typography, Input, IconButton, Collapse } from '@material-tailwind/react';
import { Search, Xmark, Menu } from 'iconoir-react';
import React, { useEffect, useState } from 'react'

const LINKS = [
    {
        icon: "https://www.fnp.com/icons/same-day-desktop.svg",
        title: "Same Day",
        href: "#",
    },
    {
        icon: "https://www.fnp.com/icons/currency-icons/inr.svg",
        title: "INR",
        href: "#",
    },
    {
        icon: "https://www.fnp.com/icons/corporate-gift.svg",
        title: "Corporate",
        href: "#",
    },
    {
        icon: "https://www.fnp.com/icons/cart.svg",
        title: "Cart",
        href: "#",
    },
    {
        icon: "https://www.fnp.com/icons/user-square-desktop.svg",
        title: "Hi Guest",
        href: "#",
    },
    {
        icon: "https://www.fnp.com/icons/more-square.svg",
        title: "More",
        href: "#",
    },
];

const NavList = () => {
    return (
        <ul className='mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center'>
            {LINKS.map(({ icon, title, href }) => (
                <li key={title}>
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

const HeaderComp = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, [])

    return (
        <Navbar className='mx-auto w-full max-w-screen-xl h-max'>
            <div className='flex items-center'>
                <Typography
                    as='a'
                    href='#'
                    type='h5'
                    className='ml-2 mr-2 block py-1 font-semibold font-mono'
                >
                    Dairy Nearby
                </Typography>
                <hr className='ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block' />
                <div className='ml-auto mr-auto w-40'>
                    <Input size="sm" type="search" placeholder="Search here...">
                        <Input.Icon>
                            <Search className='h-full w-full' />
                        </Input.Icon>
                    </Input>
                </div>
                <div className='hidden lg:block'>
                    <NavList />
                </div>
                
                <IconButton size='sm' variant='ghost' onClick={() => setOpenNav(!openNav)}
                    className='ml-1 grid lg:hidden' >
                    {
                        openNav ? (
                            <Xmark className='h-8 w-8' />
                        ) : (<Menu className="h-8 w-8" />)
                    }
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    )
}

export default HeaderComp
