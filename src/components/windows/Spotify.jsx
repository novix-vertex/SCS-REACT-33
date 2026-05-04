import './spotify.scss'
import MacWindow from './MacWindow'

const Spotify = () => {
    return (
        <MacWindow x={1000} y={90} width={"20vw"} height={"50vh"}>
            <div className="spotify-content">
                <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/artist/4YRxDV8wJFPHPTeXepOstw?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify