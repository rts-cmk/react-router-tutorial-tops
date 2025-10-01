export default function Home() {
    return (
        <div>
            <h1>Intro Page</h1>
            <p>React Router Tutorial

                React Router is a react routing libary, that lets you create client-side routes, and be able to navigate throug the website without reloading the page

                <br />
                <br />


                ### 1. Create the Project
                <br />
                1. Create a folder o you computer
                <br />
                2. Open code editor and open the terminal
                <br />

                Terminal:
                <br />
                npm create vite@latest .
                <br />
                npm install
                <br />
                npm install react-router-dom
                <br />
                
                <br />
                <br />
                Start the dev server:
                <br />
                Terminal:
                <br />
                npm run dev

                <br />
                <br />
                Run the Site 
                <br />
                Terminal:
                npm run dev
                
            </p>

            <pre>
                <code>{`
                    import ReactDom from 'react-dom/client'
                    import { BrowserRouter } from 'react-router-dom'
                    import App from './App.jsx'

                    ReactDom.createRoot(root).render(
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                    )
                    
                    `}
                </code>
            </pre>

            <div>
                <h2>How to make more pages/routes</h2>
                <p>
                    1. Create a folder named pages
                    <br />
                    2. Create a file named Home.jsx
                    <br />
                    3. Create a function that returns some JSX code
                    <br />
                    4. Export the function as default
                    <br />
                    5. Import the function in App.jsx
                    <br />
                    6. Create a Route in App.jsx
                    <br />
                    7. Repeat steps 2-6 for each page you want to create
                </p>
                
                <h3>Example on how to write the App.jsx file</h3>
                <pre>
                    <code>{`
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    `}

                    </code>
                </pre>
            </div>

        </div>
    )
}