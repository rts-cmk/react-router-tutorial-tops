import { Link } from "react-router-dom"

export default function NotFoundPageInfo() {
    return (
        <div>
            <h1>404 Page Info</h1>
            <p>The 404 is very simple to implement just using the * in the path like this:</p>
            <pre>
                <code>{`
                    <Route path='*' element={<NotFound />} />
                    `}
                </code>
            </pre>
            <p>You just implenement it in you app.jsx file</p>
            <p>And then it works, so when the user taste a url that is not defined in you routes like something /blala,</p>
            <p>It redirect them to the 404 page</p>

            <Link to="/">Go to home page</Link>
        </div>
    )
}