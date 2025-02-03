import "../styles.css";

export default function PresentationCard() {
    return (
        <>
            <div className="top-card">
                <img src="SP.jpg" alt="Foto de Santiago Ponte" />
            </div>
            <div className="bottom-card">
                <h1>Santiago Andres Ponte Ahón</h1>   
                <p>- Licenciado en Sistemas</p>   
                <p>- Licenciado en Informática</p>   
                <h2>Actualemente</h2>   
                <p>- Becario Doctoral en el Intituto de Investigación Informática LIDI (III-LIDI) de la Universidad Nacional de La Plata (UNLP)</p>   
            </div>
        </>
    );
}