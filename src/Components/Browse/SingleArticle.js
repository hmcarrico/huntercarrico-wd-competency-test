import React, {Component} from 'react';
import axios from 'axios';

class SingleArticle extends Component{
    constructor(){
        super();
        this.state = {
            article: [],
            title: '',
            photo: '',
            content: ''
        }
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(id)
        axios.get(`/api/singleArticle/${id}`).then(res => {
            this.setState({
                article: res.data
            })
        })
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateArticle = () => {
        const id = this.props.match.params.id;
        const { title, photo, content } = this.state;
        axios.put(`/api/articles/${id}`, {updatedTitle: title, updatedContent: content, updatedImage: photo}).then(res => {
            console.log(res)
        })
    }

    render(){
        const style = {
            'maxWidth': '200px',
            'maxHeight': '200px'
        }
        const article = this.state.article.map(article => {
            return <div>
                <h1>{article.title}</h1>
                <img src={article.image} style={style}/>
                <p>{article.content}</p>
            </div>
        })
        return <div>
            {article}
            Title: <input name='title' onChange={(e) => this.handleInputs(e)}/>
            Photo: <input name='photo' onChange={(e) => this.handleInputs(e)}/>
            Content: <input name='content' onChange={(e) => this.handleInputs(e)}/>
            <button onClick={() => this.updateArticle()}>Submit</button>
        </div>
    }
}

export default SingleArticle;