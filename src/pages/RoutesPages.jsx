export default function RoutesPages() {
    return (
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
                            <Route path='/routes-pages' element={<RoutesPages />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/notfoundpageinfo' element={<NotFoundPageInfo />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    `}

                    </code>
                </pre>
            </div>
    )
}