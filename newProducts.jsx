import React,{Component} from 'react';
import http from './newHttp';
class NewProducts extends Component{
    state={
        prd:[],
    }
    async componentDidMount(){
        let response=await http.get("/products")
        let {data}=response;
        console.log(data)
        this.setState({prd:data})
    }
    render(){
        let {prd}=this.state;
        return(<div className='container'>
            <div className="row bg-dark text-light">
                <div className='col-3 border'>ProductId</div>
                <div className='col-3 border'>ProductName</div>
                <div className='col-3 border'>Category</div>
                <div className='col-3 border'>Description</div>
            </div>
            {prd.map((pr)=>{
                return(
                    <div className="row text-center">
                <div className='col-3 border'>{pr.productid}</div>
                <div className='col-3 border'>{pr.productname}</div>
                <div className='col-3 border'>{pr.category}</div>
                <div className='col-3 border'>{pr.description}</div>
            </div>
                )
            })}
        </div>)
    }
}
export default NewProducts;