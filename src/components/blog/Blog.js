import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-4xl font-medium text-center py-6 bg-green-600 m-3 rounded-lg'>MY BLOG</h1>

            <section className='max-w-2xl mx-auto'>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>1. What is Cors?</h4>
                    <p className='text-slate-600 text-lg text-justify leading-10'>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.CORS is an abbreviation for Cross-Origin Response Sharing. It is what allows the website on one URL to request data from a different URL, and it frustrates both the frontend and backend devs alike.</p>
                </div>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>2. Why we use Firebase? What other options do for me to implement authentication?</h4>
                    <p className='text-slate-600 text-lg text-justify leading-10'>Firebase helps us develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. on the other hand firebase is created by Google . Its most sucurityfull and Easy to use. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>3. How does the private route work?</h4>
                    <p className='text-slate-600 text-lg text-justify leading-10'>The private route component is used to protect selected pages in a React app from unauthenticated users.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>4. what is node? How does node works?</h4>
                    <p className='text-slate-600 text-lg text-justify leading-10'>Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </section>
        </div>
    );
};

export default Blog;