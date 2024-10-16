import Link from 'next/link';

const routes = [
    {
        name: "Privacy Policy",
        path: "/privacy-policy"
    },
    {
        name: "Terms of Service",
        path: "/terms-of-service"
    }
];

const Footer = () => {
    return (
        <footer className="mt-auto flex items-center justify-between h-16 text-xs text-white/25">
            <small  className='text-sm'>&copy; 2050 Melkam. All rights reserved</small>
            <ul className='flex gap-x-6 sm:gap-x-8'>
                {routes.map((route) => (
                    <li  key={route.path}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;