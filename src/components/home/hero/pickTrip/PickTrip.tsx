import './pickTrip.scss';

export const PickTrip = () => (
    <section className="pick-trip">
        <div className="container">
            <header>
                <h2>Pick your trip</h2>
                <i className="fas fa-times"/>
                <p>
                    Our team put together some trips to you to discover,
                    feel free to discover each of them.
                </p>
            </header>

            <ul className="tabs">
                <li className="active">Chill Adventure</li>
                <li>Spooky Times</li>
                <li>Desert Madness</li>
                <li>Out in the wild</li>
            </ul>

            <div className="gallery">
                <div className="gallery"></div>
                <div className="info"></div>
            </div>
        </div>
    </section>
);