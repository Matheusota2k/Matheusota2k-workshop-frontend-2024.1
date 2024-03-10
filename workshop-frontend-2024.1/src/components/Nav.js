import React from 'react';
import Link from 'next/link';

export default function Nav({ titulo, url }) {
    return (
        <div className="flex justify-center">
            <Link className='className="text-lg font-bold netflix-button' href={url}>{titulo}
            </Link>
        </div>
    )
}
