import React from 'react';
type H1Props = {
    children: React.ReactNode;
};
const H1 = ({children}:H1Props) => {
    return (
        <div className="md:text-6xl text-3xl text-bold tracking-tight">
            {children}
        </div>
    );
};

export default H1;