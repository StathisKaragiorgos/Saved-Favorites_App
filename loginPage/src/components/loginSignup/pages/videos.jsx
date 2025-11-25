import Navbar from "../navBar"
import Logout from "../logout"
import "./videos.css"

export default function Videos(){
    return(
        <div className="container_home">
            <Navbar />

            <div>
                <h1>Welcome to Your Video Collection</h1>
<p>Here you’ll find all the videos you’ve saved and want to revisit. Enjoy watching anytime.</p>
            </div>
            <div className="videos_container">
                <div className="video_item">
                    <iframe 
                        width="100%" 
                        height="200"
                        src="https://www.youtube.com/embed/3x-fKyXPh8s"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <h3>Trip to Prague</h3>
                    <p>A video guide with the most important sightseeings.</p>
                </div>
                <div className="video_item"
                    ><iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/_yiRD0gk4yc"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>                           
                    </iframe>
                    <h3>Italy WC 06'</h3>
                    <p>Italy's road to victory in 2006 World Cup.</p>
                </div>
                <div className="video_item">
                    <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/on1pjsxYOwc"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>                           
                    </iframe>
                    <h3>National Geographic Documentary</h3>
                    <p>Surviving the raw power of a tornado.</p>
                </div>
                <div className="video_item">
                    <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/AczQDwH97CM"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>                           
                    </iframe>
                    <h3>Rolling Stones concert</h3>
                    <p>Rolling Stones concert in Brazil, one of the biggest of all time.</p>
                </div>
            </div>
            <div className="logout_container">
                <Logout/>
            </div>
        </div>
    )
}