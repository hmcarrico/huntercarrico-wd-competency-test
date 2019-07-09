import React, { Component } from 'react';

class CreateArticle extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            content: '',
            image: ''
        }
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <div>
                    <h3>Title: </h3>    
                    <input name='title' onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <h3>Content: </h3>    
                    <textarea cols={50} rows={15} wrap={true} name='content' onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <h3>Cover Image: </h3>    
                    <input name='image' onChange={(e) => this.handleInputs(e)}/>
                </div>
            </div>
        )
    }
}

export default CreateArticle;