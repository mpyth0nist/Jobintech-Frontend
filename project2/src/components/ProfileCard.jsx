import './ProfileCard.css'

function ProfileCard(props){
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p className="role">{props.role}</p>
            <a href={`mailto:${props.email}`}>{props.email}</a>
            <img src={props.avatar} alt="avatar" />
        </div>
    )
}

export default ProfileCard;
