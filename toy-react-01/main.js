import {createElement, Component, render} from './toy-react.js'

class MyComponent extends Component{
    render(){
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <span>abc</span>
    <h1></h1>
</MyComponent>, document.body);
