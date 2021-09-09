import React from 'react';

interface Props {}

const AccountTemplate: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <div>Account template</div>
            {children}
        </div>
    );
};

export default AccountTemplate;
