
import React from "react";
import "./App.css";
import {  FaProductHunt,FaDashcube ,FaUser, FaDollarSign, FaHeart,FaUserNinja,FaHandshake } from "react-icons/fa";
import progressbar from "./images/Assignment.jpg"
import CircleBar from "./images/progressbar.png"
import Earning from "./images/dollar.png"
import orders from "./images/month.png"
import Balance from "./images/balance.png"
import TotalSale from "./images/totalsale.png"
import Abstract3D from "./images/abstract.jpg"
import sarpen from "./images/sarpen.jpg"

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>
          <FaDashcube /> Dashboard {" "}
          </h1>
        </div>
        <ul className="sidebar-menu">
          <li>
            <div>
            <FaDashcube/> Dashboard{" "}
            </div>
           <div>
            <span>{">"}</span>
           </div>
          </li>
          <li>
            <div> <FaProductHunt /> Product {" "}</div>
            <div><span>{">"}</span></div>
           
          </li>
          <li>
            <div>  <FaUser /> Customer {" "}</div>
            <div>{">"}</div>
          
          </li>
          <li>
            <div> <FaDollarSign /> Income {" "}</div>
            <div>{">"}</div>
           
          </li>
          <li>
            <div>  <FaHeart /> Promote {" "}</div>
            <div>{">"}</div>
          
          </li>
          <li>
            <div> <FaHeart /> Health {" "}</div>
            <div>{">"}</div>
           
          </li>
        </ul>
       <div className="userinfo">
          <div>
             <FaUserNinja style={{borderRadius:"50%",border:"2px solid",width:"30px",height:"30px"}}/>
          </div>
          <div >
          <span>Shaik.AbdulKhaleed</span><br></br>
            <span>ProjectManager</span>
          </div>
           <div>
            <span>{"V"}</span>
           </div>
       </div>
      </div>
      
      <div className="content">
        <div className="header">
        <div className="user">
          <p>Hello Shaik Abdul Khaleed <FaHandshake/></p>
          <div className="search">
          {/* <FaSearch className="search-icon" /> */}
            <input type="text"  />
            <label htmlFor="search-input">Search</label>
          </div>
        </div>
         
        </div>
        <div className="main-section">
          <div className="maincards">
            <div className="card"><img src={Earning} alt="earning"/></div>
            <div className="card"><img src={orders} alt="earning"/></div>
            <div className="card"><img src={Balance} alt="earning"/></div>
            <div className="card"><img src={TotalSale} alt="earning"/></div>
           
          </div>
         
          <div className="img-section">
            <img src={progressbar} alt="Image 1" className="img-large" />
            <img src={CircleBar} alt="Image 2" className="img-small" />
          </div>
          <div className="footer">
            <div>
            <h2>Product Sell</h2>
            </div>
           
            <div className="search">
               <input type="text" />
               <label htmlFor="search-input">Search</label>
            <div>
             <select>
              <option>Last 30 Days</option>
              {/* Add more options as needed */}
             </select>
             </div>
             
           </div>
          </div>
         
          <div className="table-section">
            <table border={1}>
              <thead>
                <tr>
                  <th>ProductName</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Total Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                      <div className="tablehead">
                        <div>
                          <img src={Abstract3D} alt="table img" style={{width:"70px",borderRadius:"20%"}}/>
                        </div>
                        <div>
                          <span>Abstract3D</span><br></br>
                          <span>loremasasfsdgfgfsg</span>
                        </div>
                      </div>
                  </td>
                  <td>32 in stock</td>
                  <td>$45.99</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>
                  <div className="tablehead">
                        <div>
                          <img src={sarpen} alt="table img" style={{width:"70px",borderRadius:"20%"}}/>
                        </div>
                        <div>
                          <span>SarphensIllustration</span><br></br>
                          <span>loremasasfsdgfgfsg</span>
                        </div>
                      </div>
                  </td>
                  <td>32 in stock</td>
                  <td>$45.99</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
