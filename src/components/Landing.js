import { Link } from 'react-router-dom';

const Landing = () => {


    return (
        <div>
            <h1>My Survey</h1>
            <Link to='/create'>
            <p>Create a Survey</p>
            </Link>
            <Link to='/take'>
            <p>Take a Survey</p>
            </Link>
        </div>
    )
}

export default Landing