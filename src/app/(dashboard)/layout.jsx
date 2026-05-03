import React from 'react';
import Navbar from '@/components/shared/Navbar';

const DashboardLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="grow">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;