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
        </div>
    )
}