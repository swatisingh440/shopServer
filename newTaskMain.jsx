import React,{Component} from 'react';
import NewNavTest from '../fileDeploy/newNavTest';
import { Switch,Route } from 'react-router-dom';
import NewShop from '../fileDeploy/newShop';
import NewProducts from '../fileDeploy/newProducts';
import NewPurchase from '../fileDeploy/newPurchase';
class NewTaskMain extends Component{
    state={options:['View','Add']}
    render(){
        const {options}=this.state
        return( <React.Fragment>
            <NewNavTest options={options}/>
            <Switch>
                <Route path="/shop/:options" render={(props)=><NewShop {...props}/>}/>
                <Route path="/prd/:options" render={(props)=><NewProducts {...props}/>}/>
                <Route path="/purchase" render={(props)=><NewPurchase {...props}/>}/>
            </Switch>
        </React.Fragment>)
    }
}
export default NewTaskMain;