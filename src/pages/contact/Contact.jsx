export default function Contact () {
    return (
        <div className="myform">
            <h2>Contactez-moi</h2>
            <form>
                <label htmlFor="name">Nom</label>
                <input type="name" />
                <label htmlFor="email">Adresse mail</label>
                <input type="email" />
                <label htmlFor="message">Message</label>
                <input type="text" />
                <button type="submit">Envoyez</button>
            </form>
        </div>
    )
}