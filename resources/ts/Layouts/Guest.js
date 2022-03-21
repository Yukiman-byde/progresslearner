import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import LineButton from '../Components/LineButton';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <Link href="/">
                    Progress Learner
                </Link>
            </div>
            <div className='flex flex-col w-32 h-32 bg-gray-100 rounded items-center justify-center'>
                <LineButton></LineButton>
            </div>
        </div>
    );
}
