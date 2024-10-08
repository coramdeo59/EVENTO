import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <Image
            src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
            alt="Evento LOGO"
            width={53}
            height={12}
        />
    );
};

export default Logo;