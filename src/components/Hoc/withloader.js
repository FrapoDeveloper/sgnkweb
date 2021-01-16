
import React,{Component} from 'react'
import Loader from '../Atoms/loader'
const withloader =(valueProp)=>(WrappedComponet) => {
    return class WithLoader extends Component{
       render(){
            
            return this.props[valueProp].length === 0
            ? <Loader />
            : <WrappedComponet {...this.props} />
        }  
    }
   
}
export default withloader