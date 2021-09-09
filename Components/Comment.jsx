import { Component } from "react";
export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            comments: ["comment 1", "comment 2"]
        }
    }
    addComment = (e) => {
        e.preventDefault();
        let newComment = [...this.state.comments, e.target.commentone.value];
        this.setState({ comments: newComment });
    }
    render() {
        return (
            <div>
                <table border="1">
                    <ul>
                        <th>
                            {this.state.comments.map((val) => {
                            return (
                                <li>
                                    {val}
                                </li>
                            )
                        })} 
                        </th> 
                    </ul>
                </table>

                <form onSubmit={this.addComment}>
                    <table border="1">
                        <input type="text" name="commentone" /> <br />
                        <button>save</button>
                    </table>

                </form>

            </div>
        )
    }
}
