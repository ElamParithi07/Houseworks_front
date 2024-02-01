// import Labour from "./Labour";
import { useNavigate } from "react-router"
import Plumber from "./Plumber";
import Electrician from "./Electrician";
import Barber from "./Barber";

export default function Service(){
    return <div>
         
   <div className="container" id="cardsection">
           <h1 style={{textAlign:"center",margin:"80px 0 70px 0"}}><b>What Are You Looking For?</b></h1>
            <form className="search">
                {/* <select id="searchTerm1" name="place" form="selectplaceform">
                    <option value="Select-city">Select-city</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Tiruppur">Tiruppur</option>
                    <option value="Trichy">Trichy</option>
                    <option value="Pondicherry">Pondicherry</option>
                </select> */}
                <input type="text" id="searchTerm1" placeholder="Coimbatore" required/>
                <input type="text" id="searchTerm" placeholder="Search for services eg. basin repair" required/>
                <button type="submit" id="searchButton">
                {/* <Link to={'/Companylist/'+service} style={{color:"color",textDecoration:"none"}}/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
            </button>
            </form>
           <div id="cardcon" className="d-flex" style={{justifyContent:"center"}}>
              <Plumber/>
              <Electrician/>
              <Barber/>
           </div>
    </div>
    </div>
}
