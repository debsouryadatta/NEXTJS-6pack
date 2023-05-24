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
// * 5. not-found.jsx is shown is when the requested route is not found






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


