// import { useNavigate } from "react-router"
import { Link } from "react-router-dom";

export default function Home(){
    // const navigate = useNavigate();
    return <div>
  <div className="container">
    <div className="row" style={{height:500}}>
      <div className="col-md-7" style={{alignContent:"center",padding:"50px"}}>
        <div className="d-flex"  style={{alignItems:"center"}}>
          <div className="col-md-12"  style={{padding:"70px 5px 5px 10px",marginTop:"5px"}}>
            <span style={{marginTop:"15px",color:"blueviolet"}}>Book Home services with just One Click!</span>
            <p className="display-3" style={{fontWeight:"bold",marginTop:"15px"}}>Book Expert Home Services Online</p>
            <p  style={{marginTop:"15px"}}>Book the finest home services at your fingertips. From skilled technicians to experienced handymen, we've got you covered. Trust us to transform your living spaces into havens of comfort and functionality.</p>
            <button type="button" className="btn btn-primary btn-lg" style={{borderRadius:"0px",marginTop:"15px",backgroundColor:"blueviolet",border:"1px solid blueviolet"}}><Link style={{textDecoration:"none",color:"white"}} to="/Search">Book Now &rarr;</Link></button>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="bg-image" style={{backgroundImage:"url(plumber-pointing-front-removebg-preview.png)",width:"100%",height:"700px",backgroundRepeat:"no-repeat"}}></div>
      </div>
    </div>
  </div>
  {/* <section style={{marginTop:"-90px"}}>
            <div className="container">
                <div className="row d-flex justify-content-center  h-100">
                <div className="col col-xl-10">
                    <div className="card mb-5" style={{borderRadius:"15px",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",border:"0px"}}>
                    <div className="card-body p-4" style={{backgroundColor:"#3c3b5b",borderRadius:"15px"}}>
                    <div>
                    <h1 style={{textAlign:"center",color:"white"}}><b>Are You an Expert Looking to Join Us?</b><span><button type="button" className="btn  btn-lg" style={{borderRadius:"10px",backgroundColor:"white",color:"black",marginLeft:"20px"}}>Get Started</button></span></h1>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
    <br></br><hr></hr> */}
    {/* <div>
      <div><br></br><br></br>
        <h1 style={{textAlign:"center"}}>Popular Services</h1><br></br><br></br>
        <div className="d-flex" style={{justifyContent:"spacebetween"}}>
        <div>
          <img src="14935658_5551789.jpg" alt="" style={{height:"200px",paddingLeft:"80px"}}></img>
          <p style={{textAlign:"center",paddingLeft:"80px"}}>Carpet Cleaning</p>
          </div>
          <div>
            <img src="7206485_3527163.jpg" alt="" style={{height:"200px",paddingLeft:"80px"}}></img>
            <p style={{textAlign:"center",paddingLeft:"80px"}}>Kitchen Cleaning</p>
          </div>
          <div>
          <img src="27828936_7320204.jpg" alt="" style={{height:"200px",paddingLeft:"80px"}}></img>
          <p style={{textAlign:"center",paddingLeft:"80px"}}>Sofa Cleaning</p>
          </div>
          <div>
          <img src="27828936_7320204.jpg" alt="" style={{height:"200px",paddingLeft:"80px"}}></img>
          <p style={{textAlign:"center",paddingLeft:"80px"}}>House Cleaning</p>
          </div>
          <div>
          <img src="10255860_4411337.jpg" alt="" style={{height:"200px",paddingLeft:"80px"}}></img>
          <p style={{textAlign:"center",paddingLeft:"80px"}}>Bathroom Cleaning</p>
          </div>
        </div>
      </div>
    </div> */}
    {/* <section style={{marginTop:"150px"}}>
            <div className="container">
                <div className="row d-flex justify-content-center  h-100">
                <div className="col col-xl-10">
                    <div className="card mb-5" style={{borderRadius:"15px",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
                    <div className="card-body p-4">
                    <div>
                    <h2 style={{textAlign:"center"}}><b> <span><img src="discount.png" alt="discount" style={{height:"40px",marginRight:"10px"}}></img></span>Offers for you</b></h2>
                    </div>
                        <br></br>
                        <div className="d-flex justify-content-start align-items-center">
                        <div className="cards d-flex">
                              <div className="card" style={{width:"18rem",marginLeft:"20px", boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
                                
                                <div className="card-body" style={{backgroundColor:"#2bcadf"}}>
                                  <h3 className="card-title text-white" style={{textAlign:"bottom"}}>15% offer on <br/>Home Renovation</h3>
                                  <button type="button" className="btn btn-primary text-black" style={{marginTop:"15px",backgroundColor:"white",border:"0",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>Book now&rarr;</button>
                                </div>
                              </div>
                              <div className="card" style={{width:"18rem",marginLeft:"20px", boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
                                
                                <div className="card-body" style={{backgroundColor:"purple"}} >
                                  <h3 className="card-title text-white" style={{textAlign:"bottom"}}>15% offer on <br/>Wall Textures</h3>
                                  <button type="button" className="btn btn-primary text-black" style={{marginTop:"15px",backgroundColor:"white",border:"0",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>Explore&rarr;</button>
                                </div>
                              </div>
                              <div className="card" style={{width:"18rem",marginLeft:"20px", boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
                                
                                <div className="card-body"style={{backgroundColor:"blueviolet"}}>
                                  <h3 className="card-title text-white" style={{textAlign:"bottom"}}>15% offer on <br/>AC installation</h3>
                                  <button type="button" className="btn btn-primary text-black" style={{marginTop:"15px",backgroundColor:"white",border:"0",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>Book now&rarr;</button>
                                </div>
                              </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </section> */}
    {/* <article style={{backgroundColor:"#E2EAF8",marginTop:"150px"}}>
      <div><br></br><br></br>
          <h1 style={{textAlign:"center"}}><b>In a Nutshell..</b></h1><br></br>
          <div className="d-flex">
              <div>
              <img src="plumber-pointing-lateral-removebg-preview.png" alt="details" style={{height:"500px",marginLeft:"70px"}}></img>
              </div>
              <div style={{alignContent:"center",justifyItems:"center",padding:"90px"}}>
                <p style={{fontSize:"40px",fontWeight:"bold",color:"darkblue"}}>Know about HouseWorks.</p>
                  <p> Our user-friendly platform allows you to book expert home services with just a few clicks, saving you valuable time and effort.
                  We understand the importance of trust when it comes to your home. <br></br> <br></br>That's why we meticulously vet and handpick our professionals to ensure they are the best in the industry, guaranteeing you top-notch service.
                  <br></br> <br></br>From home repairs and renovations to interior design and landscaping, we've got a wide array of services tailored to meet your unique needs. No task is too big or too small for our experts.
                  </p>
                  <p><Link style={{textDecoration:"none",color:"blueviolet"}} to="/About">Want to Know more.</Link></p>
              </div>
          </div>
      </div>
    </article> */}
    {/* <div>
      <div><br></br><br></br>
        <h1 style={{textAlign:"center",marginTop:"60px"}}><b>Really, It's That Simple!</b></h1><br></br><br></br>
        <div className="d-flex" style={{justifyContent:"center"}}>
          <div>
            <p style={{textAlign:"center",marginLeft:"20px",paddingLeft:"60px",fontWeight:"bold"}}><span><img src="check.png" alt="" style={{height:"50px",paddingLeft:"60px",marginRight:"30px"}}></img></span>Find Best Services near you</p>
          </div>
          <div>
          
          <p style={{textAlign:"center",marginLeft:"20px",paddingLeft:"60px",fontWeight:"bold"}}><span><img src="check.png" alt="" style={{height:"50px",paddingLeft:"10px",marginRight:"30px"}}></img></span>Book with just a click</p>
          </div>
          <div>
          
          <p style={{textAlign:"center",marginLeft:"20px",paddingLeft:"60px",fontWeight:"bold"}}><span><img src="check.png" alt="" style={{height:"50px",paddingLeft:"60px",marginRight:"30px"}}></img></span>Connect.</p>
          </div>
        </div>
      </div>
    </div><br></br> */}
    </div>
}

