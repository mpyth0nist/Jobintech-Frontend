import '../App.css'
import useToggle from '../hooks/useToggle';

function UserCard({ theme, name, email, phone }){

    const [toggle, setToggle] = useToggle(false)

    return (
        <div className={theme === 'light' ? 'list light-mode' : 'list dark-mode'}>
            
            <h2>{name}</h2> 
            <button className={theme === 'light' ? 'details light' : 'details dark'} onClick={setToggle}>
            {toggle ? 'Hide Details' : 'Show Details'}
            </button>
            { toggle ? 
            <>
            <p>{email}</p>
            <p>{phone}</p>
            </>
            : null

        }
        </div>

    )

}

export default UserCard;