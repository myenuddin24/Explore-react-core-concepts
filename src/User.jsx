export default function User({user}) {
    const {name, email, phone} = user;

    const userStyle = {
        border: '2px solid GreenYellow',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }

    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
        </div>
    )
}

/**
 * step -->
 * 1. use state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
*/