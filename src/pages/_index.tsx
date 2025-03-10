// pages/index.js

import Head from 'next/head';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
            <Head>
                <title>Coming Soon</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>
                <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
                <p className="text-lg mb-6">We're working hard to bring something amazing. Stay tuned!</p>
                <div className="flex gap-4">
                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded bg-gray-800 text-white outline-none border border-gray-600" />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Notify Me</button>
                </div>
            </div>
        </div>
    );
}
