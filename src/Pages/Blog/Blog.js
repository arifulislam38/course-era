import React from 'react';

const Blog = () => {
    return (
        <div className='p-4'>
            
            <div className='border text-xl text-start p-3 mb-3'>
                <h1 className='text-2xl font-semibold text-orange-200 mb-3'>Q: What is cors</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br /><br />
                
                The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Additionally, for HTTP request methods that can cause side-effects on server data in particular, HTTP methods other than GET, or POST with certain MIME types, the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request. Servers can also inform clients whether "credentials" such as Cookies and HTTP Authentication should be sent with requests.</p>
            </div>

            <div className='border text-xl text-start p-3 mb-3'>
                <h1 className='text-2xl font-semibold text-orange-200 mb-3'>Q: What is firebase</h1>
                <p>Firebase is a set of hosting services for any type of application Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ .... It offers NoSQL and real-time hosting of databases, content, social authentication Google, Facebook, Twitter and Github, and notifications, or services, such as a real-time communication server. </p>

                <span>Other firebase alternatives</span>

                <p>
                    <ul>
                        <li>Parse</li>
                        <li> AWS Amplify</li>
                        <li>PubNub</li>
                        <li>Couchbase</li>
                        <li>NativeScript</li>
                        <li>RxDB</li>
                        <li>Kinvey</li>
                        <li>Flutter</li>
                    </ul>
                </p>
            </div>

            <div className='border text-xl text-start p-3 mb-3'>
                <h1 className='text-2xl font-semibold text-orange-200 mb-3'>Q: How does the private route work?</h1>
                <p>The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn't logged in they're redirected to the /login page, if the user is logged in but aren't in an authorised role they're redirected to the home page. <br />
                
                Depending on how you use the HTTP module, a problem that you might come across is the occurrence of multiple HTTP requests. This is actually the normal behavior of the HTTP observables, but it might be surprising the first time that we see it.
                
                If the user isn't logged in an empty object is returned. The auth header is used to make authenticated HTTP requests to the server api using JWT authentication. Path: /src/_helpers/fake-backend.js</p>
            </div>

            <div className='border text-xl text-start p-3 mb-3'>
                <h1 className='text-2xl font-semibold text-orange-200 mb-3'>Q: What is Node? How does Node work?</h1>
                <p>A great deal of the perplexity for novices to Node is misjudging explicitly what it is. Node.JS works exceptionally, and it is an extraordinary instrument if you need a type of live correspondence on a site. It is capable of rapidly conveying information to/from an internet browser.

                Independent from anyone else, it does not understand anything. It does not work as same as Apache. There is no config record of guiding you to your HTML documents.
                If you need it to be an HTTP server, you need to compose an HTTP server by executing its implicit libraries. Node.JS merely is one more approach to run code on your PC. It is only a JavaScript run-time.
                To start utilizing Node.JS, you should at first comprehend the refinement among Node.JS and general server-side scripting conditions.
                Other scripting dialects utilize a different server like Apache or Nginx to run the application, which is the string besides process-based, which shows if the procedure is sitting tight for the I/O, the whole string is blocked. <br /><br />
                
                <span>How node js works</span>
                
                Consequently, customarily, there has dependably been a huge inquiry with PCs where the CPU can merely complete one thing at a minute. It was settled long back by multi-threading, empowering us to have different 'strings' on an individual CPU. In this way, to clear up, on the off chance that you have ten strings running on, a CPU scheduler will part up the CPU's time equitably among every one of them, so they involve break even with time cuts.
                Henceforth maybe in 1 second, the majority of the ten strings would catch 100ms. It changes among them constantly and keeping in mind that it's brisk, the exchanging holds a tremendous amount of overhead. Maintaining a strategic distance from that overhead would be fine.</p>
            </div>
            
        </div>
    );
};

export default Blog;