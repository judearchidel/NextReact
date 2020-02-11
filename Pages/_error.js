import React from 'react';
import Link from 'next/link';

const indexpage = () => (
    <div>
        <h1>Something went wrong</h1>
        <p>Go Back <Link href="/"><a>Home</a></Link> </p>
    </div>
);

export default indexpage;