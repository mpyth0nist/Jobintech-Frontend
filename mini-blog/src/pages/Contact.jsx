import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact(){
    const navigate = useNavigate()
    let [message, setMessage] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault()

        navigate("/")


    }
    return(
        <form onSubmit={handleSubmit}>

            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message ici.."></textarea>
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default Contact;