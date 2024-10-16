"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "All Events",
        path: "/events/all"
    }
];

const Header = () => {
    const activePathName = usePathname();
    return (
        <header>
            <nav className="flex h-16 px-3 md:px-9 border-b border-white/10 justify-between items-center">
                <Logo />
                <ul className="flex gap-x-6 text-sm">
                    {routes.map((r, i) => (
                        <li key={i}
                            className={`text-white/50 hover:text-white transition ${activePathName === r.path ? 'text-white' : ''}`}>
                            <Link href={r.path}>{r.name}</Link>
                            {activePathName === r.path && (
                                <motion.div
                                    layoutId="header-active-link"
                                    className="block h-1 w-full bg-accent mt-1"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;