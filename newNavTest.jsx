import React,{Component} from 'react';
import {Link} from "react-router-dom"
class NewNavTest extends Component{
    render(){
        const {options}=this.props;
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
        
            <li className="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shops
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {options.map((pr)=>{
            return (<Link className="dropdown-item" to={`/shop/${pr}`}>{pr}</Link>)
          })}
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {options.map((pr)=>{
            return (<Link className="dropdown-item" to={`/prd/${pr}`}>{pr}</Link>)
          })}
        </div>
      </li>
      <li className="nav-item">
              <Link className="nav-link" to="/purchase">
                Purchase
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    
            </React.Fragment>
        )
    }
}
export default NewNavTest;