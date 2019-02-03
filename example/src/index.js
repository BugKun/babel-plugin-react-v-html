import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            html: `<span>2</span><i>33</i>`
        }
    }

    render() {
        const { html } = this.state;

        return (
           <div className="main">
               <h4>React v-html example：</h4>
               <textarea 
                    value={html}
                    onChange={(e) => 
                        this.setState({
                            html: e.target.value
                        })
                    }
                />
                <div
                    v-html={html}
                />
           </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));