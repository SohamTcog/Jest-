import React from 'react';
import "./Header.css";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <h1 title="Header" className="header">{title}</h1>
            {/* <h3 data-testid="header-2" className="header">Hello</h3> */}
        </>
    );
};

export default Header;
