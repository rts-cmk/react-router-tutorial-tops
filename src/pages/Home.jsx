import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>Intro Page</h1>
            <p>React Router Tutorial
                <br />
                React Router is a react libary, that lets you create client-side routes, and be able to navigate throug the website without reloading the page

                <br />
                <br />


                1. Create the Project
                <br />
                2. Create a folder o you computer
                <br />
                3. Open code editor and open the terminal
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
            <Link to="/routes-pages">Go to next page</Link>
        </div>
    )
}