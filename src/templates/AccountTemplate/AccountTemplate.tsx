import React from 'react';

interface Props {}

const AccountTemplate: React.FC<Props> = ({ children }) => {
    return (
        <div
            style={{
                backgroundImage: "url('/images/film-reel-reels-3d-wallpaper-preview.jpg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            {children}
        </div>
    );
};

export default AccountTemplate;
