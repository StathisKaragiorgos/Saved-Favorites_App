import Navbar from "../navBar"
import Logout from "../logout"
import "./music.css"

export default function Music(){
    return(
        <div className="container_home">
            <Navbar />

            <div>
                <h1>Welcome to Your Music Collection</h1>
<p>Here you’ll find all the music playlists you’ve saved and want to listen again. Enjoy listening anytime.</p>
            </div>
            <div className="music_container">
                <div className="music_item">
                    <iframe 
                        width="100%" 
                        height="200"
                        src="https://www.youtube.com/embed/videoseries?list=PLfqlpuz-LWL28EHinbSqNhj2nFZS-WQ-I"
                        title="YouTube music"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <h3>Metallica</h3>
                    <p>Headbang to Metallica’s greatest hits, all in one playlist.</p>
                </div>
                <div className="music_item"><iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/videoseries?list=RDEM07sWLP40fqgolm2qkwr-DQ"
                        title="YouTube music"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>                           
                    </iframe>
                    <h3>Rolling Stones</h3>
                    <p>A playlist of The Rolling Stones’ greatest classics.</p>
                </div>
                <div className="music_item">
                    <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/videoseries?list=PL1tiBqitg38_Rsqb2qiTvm3hKX2Y2qUgg"
                        title="YouTube music"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>                           
                    </iframe>
                    <h3>Pink Floyd</h3>
                    <p>Experience the timeless tracks of Pink Floyd.</p>
                </div>
                <div className="music_item">
                    <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/videoseries?list=PL7E436F1EC114B001"
                        title="YouTube music"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>                           
                    </iframe>
                    <h3>Eminem</h3>
                    <p>Eminem essentials, ready to play and rewind.</p>
                </div>
            </div>
            <div className="logout_container">
                <Logout/>
            </div>
        </div>
    )
}