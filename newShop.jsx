import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import http from './newHttp';
class NewShop extends Component{
    state={
        shop:[],
    }
    async componentDidMount(){
        let response=await http.get("/shop")
        let {data}=response;
        console.log(data)
        this.setState({shop:data})
    }
   
    showPurchase=(shopId)=>{
       
    }
    render(){
        let {shop}=this.state;
        return(<div className='container'>
            <div className="row bg-dark text-light">
                <div className='col-3 border'>ShopId</div>
                <div className='col-3 border'>Name</div>
                <div className='col-3 border'>Rent</div>
                <div className='col-3 border'></div>
            </div>
            {shop.map((pr)=>{
                return(
                    <div className="row text-center">
                <div className='col-3 border'>{pr.shopid}</div>
                <div className='col-3 border'>{pr.name}</div>
                <div className='col-3 border'>{pr.rent}</div>
                <div className='col-3 border'><button onClick={()=>this.showPurchase(pr.shopId)}>Purchase</button></div>
            </div>
                )
            })}
        </div>)
    }
}
export default NewShop;