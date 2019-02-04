import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            html: `<strong>v-html</strong> is awesome`
        }
    }

    render() {
        const { html } = this.state;

        return (
           <div className="main">
               <h4>The example of <i>React v-html</i>：</h4>
               <textarea 
                    rows="20"
                    cols="50"
                    value={html}
                    onChange={(e) => 
                        this.setState({
                            html: e.target.value
                        })
                    }
                />
                <br />
                <div
                    v-html={html}
                />
           </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));