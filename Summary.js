// * #1 Introduction to Next Js, Understanding the Features and Benefits | Mastering Next Js
// * 1.NextJS does not require to install various libraries which was needed for react, it already has those libraries installed. Its now a full stack.

// * 2. In summary, server-side rendering is better for applications that require high performance, search engine optimization, and scalability. On the other hand, client-side rendering is better for applications that require a lot of interactivity and faster development time.

// * 3. NextJS features - Server side rendering, Simple routing, Static site generation(Through CDN), Optimised performance(sent required code in small chunks), hot code reloading(time required for starting the server during development >>> faster), Api routes.

// * 4. Advantages Over React.Js - 
// • Search Engine Optimization
// • Production Ready
// • Image Optimization
// • Data Fetching Methods
// • 700x faster
// • API routes
// • Typescript Support

// * 5. Next.Js 13 Features - 
// • App Directory
// • Layouts
// • Server Component
// • Fetch API Extended
// • Turbo Pack






// * #2 Next.js Setup: Installation and Folder Structure Demystified | Mastering Next Js
// * 1. First of all we installed the next app without ts, tailwind, app directory, src directory.
// * 2. Then we converted the whole application to app directory by altering the next.config.js file and making an app directory which consists of page.jsx
// * 3. Since we are using app directory, we have to delete the main files i.e. _app.js,index.js and make the page.jsx as the main file of the application
// * 4. Since page.jsx is a server component so we can't use react hooks there.






// * #3 Next.js 13 File Conventions & Reserved files | Mastering Next Js
// * 1. By default all components are server based components, and the main file should be page.jsx
// * 2. Its actually layout.js is the main file and page.jsx is the main component, layout.js takes page.jsx as its children
// * 3. loading.jsx is shown when the application is loading
// * 4. error.js is shown if there is any type of error -> Error components must be Client components - since hooks are used in it
// * 5. not-found.js is shown is when the requested route is not found






// * #4 Next.js Routing: Linking and Navigating | Mastering Next Js
// * 1. By default routing with folders -> /about page in about folder
// * 2. Hierarchy is followed until there are separate headers, separate layouts and separate stuffs for the other folders
// * 3. For dynamic routes, the value of the params can be get using square brackets
// * 4. Creating Header component and importing it to layout.js
// * 5. Using Link for navigation but in more simpler way






// * #5 Next.js Rendering: Right Components for Faster Load and Seamless Experiences | Mastering Next Js
// * 1. Server component v/s client component - which one to use when
// * 2. Client component console logs on browser whereas server component console logs on the terminal
// * 3. Giving some style to header.jsx
// * 4. We can also make even smaller components like searchbar to client components, so we shifted the searchbar from header.jsx to searchbar.jsx
// * 5. Try to make server components as much possible
// * 6. For importing client components on server components, normal technique but for importing server components on client components we need a separate technique or else it shows error
// * 7. The separate technique is implemented on Contact folder, have a look for better understanding
// * 8. We can send props from server components to client components
// * 9. Some extra concepts like Network Boundary, Poisoning, process.env only inside server component,server-only & client-only packages
// * 10. If we want to use packages which requires the use of hooks or other stuffs, we can import the package in a client component and use this component in the server component






// * #6 Next.js: A Deep Dive into Backend and API Routing | Mastering Next Js
// * 1. For Rest Api in Next.js, we use pages folder, we will get the json if we go to the route - /api/hello/ 
// * 2. The files acts as controllers(analogy with mern)
// * 3. Creating a list of products and sending it to frontend
// * 4. Connecting MongoDB to our application, connectDb from database.js to all.js
// * 5. Creating mongoose model/schema in model folder
// * 6. Create Operation in mongoDB with -> await Product.create({name,price,category})
// * 6. Read Operation in mongoDB with -> const products = await Product.find({})
// * 6. Handling Post req in Nextjs backend server






// * #7 Next.js: Cutting-Edge Data Fetching Techniques | Mastering Next Js
// * 1. Data fetching -> SSG - Caching & SSR - Dynamic data fetching
// * 2. In SSG - We request data for one time, then the data gets stored in the cache which we can get by using the CDN - thats will be super fast
// * 3. In SSR - We request data to the server everytime
// * 4. In ISR - Between SSG & SSR, 2types -> 1)Revalidates the data at a specific time interval(Background), 2)Revalidates the data whenever there is an update(On-demand)
// * 5. Creating a new next app with app router inbuild & changing some properties in next.config.js
// * 6. Creating a function in features.js to fetch an api of users, and the function is used in pages.jsx
// * 7. By default Next uses SSG, to change this into SSR - we need to set cache: "no-cache" during fetching
// * 8. Using Link & dynamic routing for showing the user details in the folder - user/[id]
// * 9. Once the data comes in, it gets stored in the cache and next time the data is fetched from the cache
// * 10. Showing how tha data gets loaded when we just hover to that link, feature of nextjs - then it just shows the cached data -> SSG
// * 12. Mutation with router.refresh method to show the refreshed data
// * 13. Making Posts.jsx and a new func in features.js to show the streaming and suspence concept i.e. the data which are already loaded are shown first then the leftover data is shown gradually.


// * 14. Changing metadeta(title) of any specific page
// * 15. SSR, SSG , ISR works only during get requests
// * 16. By default SSG is used by the Nextjs in static routes,so the all posts page loads superfast
// * 17. But in dynamic routes by default SSR is used, still we can change them to SSG by mentioning them in generateStaticParams function -> As shown in generateStaticParams
// * 18. So the first 4 renders with SSG(very fast) and the leftover renders with SSR
// * 19. Finally not-found was shown but we didn't implement that since its not required
