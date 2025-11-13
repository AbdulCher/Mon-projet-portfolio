import "../styles/contact.css";
export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Vous avez un projet ou une question ? Écrivez-moi !</p>
      <form id="contactForm" action="https://formspree.io/f/TON_ID" method="POST">
    <div class="form-group">
      <label for="name">Nom</label>
      <input type="text" id="name" name="name" required placeholder="Votre nom"></input>
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" required placeholder="Votre email"></input>
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required placeholder="Votre message"></textarea>
    </div>

    <button type="submit">Envoyer</button>
  </form>
    </section>
  );
}
