import React, { Component } from 'react'

export class AddTask extends Component {
    state={
        text:""
    }
    handleSubmit = (e)=>{
        this.setState({ text:e.target.value});
    }
    render() {
        return (
            <div className='add'>
                <input type="text" onChange={this.handleSubmit} value={this.state.text}/>
                <button onClick={()=>{this.props.handleAdd(this.state.text);this.setState({ text:""});}}>Add</button>
            </div>
        )
    }
}

export default AddTask
