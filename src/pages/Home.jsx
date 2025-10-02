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

            

        </div>
    )
}