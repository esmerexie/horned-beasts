import { render } from "@testing-library/react";
import { Component } from "react";
import beastJSON from '../Data.json'
import HornedBeast from '../components/HornedBeast'



class Main extends Component{
    constructor(){
        super();
        this.state = {
            beastList: beastJSON,
            favorite: 0
        }
    }

    render(){
        return(
            <div>
                <HornedBeast />
            </div>
        )
    }
    
}

export default Main;