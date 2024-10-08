import React from 'react';
import Link from "next/link";
import Logo from "./Logo";
const route = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "All Events",
        path: "/events/all"
    }
]

const Header = () => {
    return (
        <header>
            <nav className="flex h-16 px-3 md:px-9 border-b border-white/10 justify-between items-center">
                <Logo />
                <ul className="flex gap-x-6 text-sm">
                    {route.map((r, i) => (
                        <li key={i} className="text-white/50 hover:text-white/100 transition">
                            <Link href={r.path}>{r.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;