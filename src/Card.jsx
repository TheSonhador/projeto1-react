import profilePic from './assets/sung.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="foto de perfil"></img>
            <h2 className="card-title">Sung Jin-Woo</h2>
            <p className="card-text">⁠Eu irei proteger minha família, mesmo que isso signifique que cada caçador do mundo se torne meu inimigo.</p>
        </div>
    );
}

export default Card