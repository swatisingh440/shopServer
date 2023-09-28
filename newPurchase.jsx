import React,{Component} from "react";
import http from "./newHttp";

class NewPurchase extends Component{
    state={
        purchase:[]
    }
   async componentDidMount(){
   let response =await http.get("/purchase")
   let {data}=response;
   console.log(data)
   this.setState({purchase:data})
    }
    render(){
        const {purchase}=this.state;
        return(
            <div className="container">
<div className="row bg-dark text-light">
                <div className='col-2 border'>ProductId</div>
                <div className='col-2 border'>ShopId</div>
                <div className='col-2 border'>PurchaseId</div>
                <div className='col-2 border'>Quantity</div>
                <div className='col-2 border'>Price</div>
            </div>
            {purchase.map((pr)=>{
                return(
                    <div className="row text-center">
                <div className='col-2 border'>{pr.productid}</div>
                <div className='col-2 border'>{pr.shopId}</div>
                <div className='col-2 border'>{pr.purchaseId}</div>
                <div className='col-2 border'>{pr.quantity}</div>
                <div className='col-2 border'>{pr.price}</div>
            </div>)})}
            </div>
        )
    }
}
export default NewPurchase;