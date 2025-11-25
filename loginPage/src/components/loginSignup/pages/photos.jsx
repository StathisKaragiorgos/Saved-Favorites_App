import Navbar from "../navBar"
import Logout from "../logout"
import "./photos.css"
import sagradafamilia from "../assets/SagradaFamilia.png"
import petra from "../assets/petra.jpg"
import patagonia from "../assets/patagonia.jpg"
import opera from "../assets/opera.jpg"

export default function Photos(){
    return(
        <div className="container_home">
            <Navbar />

            <div>
                <h1>Welcome to Your Photo Collection</h1>
<p>Here you’ll find all the photos you’ve saved and want to revisit. Enjoy watching anytime.</p>
            </div>
            <div className="photos_container">
                <div className="photo_item">
                    <img src={sagradafamilia} alt="Sagrada Familia" 
                        width="100%" 
                        height="200"/>
                    <h3>Sagrada Familia Barcelona</h3>
                    <p>The iconic Sagrada Familia, Gaudí’s masterpiece in Barcelona.</p>
                </div>
                <div className="photo_item">
                    <img src={petra} alt="Petra Jordan" 
                        width="100%" 
                        height="200"/>
                    <h3>Petra Jordan</h3>
                    <p>The ancient city of Petra, carved into the rose-red cliffs of Jordan.</p>
                </div>
                <div className="photo_item">
                    <img src={patagonia} alt="Patagonia" 
                        width="100%" 
                        height="200"/>
                    <h3>Patagonia Argentina</h3>
                    <p>The breathtaking landscapes of Patagonia, Argentina’s wild frontier.</p>
                </div>
                <div className="photo_item">
                    <img src={opera} alt="Sydney Opera"  
                        width="100%" 
                        height="200"/>
                    <h3>Opera House Australia</h3>
                    <p>The iconic Sydney Opera House, a masterpiece of modern architecture.</p>
                </div>
            </div>
            <div className="logout_container">
                <Logout/>
            </div>
        </div>
    )
}