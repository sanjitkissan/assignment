import {Component} from "react";
export default class Hobbies extends Component{
    constructor(){
        super();
        this.state = {
            hobbies:["coding", "reading books"]
        }
    }
    addHobbies = (e)=>{
        e.preventDefault();
        let newHobbey = [...this.state.hobbies, e.target.hubbey.value];
        this.setState({hobbies:newHobbey});
    };
    clearAll = ()=>{
        this.setState({hobbies:[]});
    }
    render(){
        return (
            <div>
                <button onClick={this.clearAll}>clearAll</button>
                <ul border ="1">
                    {this.state.hobbies.map((val,index)=>{
                        return (
                            <li>
                                {val}
                            </li>
                        )
                    })}
                </ul>
                <form onSubmit={this.addHobbies}>
                    <input type="text" name="hubbey" />
                    <button>add</button>
                </form>
            </div>
        )
    }
}