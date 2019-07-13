import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import './CreateArticle.scss';

class CreateArticle extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            content: '',
            category: '',
            image: ''
        }
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitArticle = () => {
        const { title, content, category, image } = this.state;
        const { user_id } = this.props.user;
        axios.post('/api/articles', {title, content, category, image, user_id}).then(res => {
            this.props.history.push('/')
        })
    }

    render(){
        const { title, content, image } = this.state;
        const style = {
            maxHeight: '200px',
            maxWidth: '200px'
        }
        return (
            <div className='create'>
                <div>
                    <h3>Title: </h3>    
                    <input name='title' onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <h3>Category: </h3>
                    <select onChange={(e) => this.setState({category: e.target.value})}>
                        <option selected disabled>Choose Category</option>
                        <option>politics</option>
                        <option>entertainment</option>
                        <option>sports</option>
                    </select>
                </div>
                <div>
                    <h3>Supporting Image: </h3>    
                    <input name='image' onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <h3>Content: </h3>    
                    <textarea cols={30} rows={15} name='content' onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <h1>Preview:</h1>    
                    <div>
                        <h2>{title}</h2>
                        <img style={style} src={image} />
                        <p>{content}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => this.submitArticle()}>Submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(CreateArticle);