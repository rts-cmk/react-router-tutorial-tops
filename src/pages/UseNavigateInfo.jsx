import { Link } from 'react-router-dom'

export default function UseNavigateInfo() {
    return (
        <div>
            <h1>useNavigate function</h1>
            <p>The useNavigate() function is mostly used in programmtic matter like ex in a form submit to send the user to a thank you page</p>
            <p>Example on how to use it: </p>
            <pre>
                <code>{`
                    Start by importing it:
                    import { useNavigate } from 'react-router-dom'
                    
                    Then in you function component:
                    const navigate = useNavigate()

                    Make fx a handlefunction for when a form is submitted:
                    function handleSubmit(e){
                        e.preventDefault()
                        // Something with the form date here
                        navigate('/thank-you') // Navigate the user to a thank you page
                    }

                    in the return:
                    return(
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" />
                            <input type="submit" value="Submit" />
                        </form> 
                    )
                `}
                </code>
            </pre>

            <p>
                Another thing is the link method, which works like the a tag but instead of realoding the page, 
                <br />
                it just switches the content and go the page you have linked to
            </p>
            <pre>
                <code>{`
                    First import it:
                    import { Link } from 'react-router-dom'

                    Then use it in your function like this:
                    function NavBar(){
                        return(
                            <nav>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        )
                    }
                `}
                </code>
            </pre>
            <Link to="/notfoundpageinfo">Go to next page</Link>
        </div>
    )
}