import React, {Component} from 'react';
import { connect } from 'react-redux'
import IndividualArticle from './IndividualArticle';
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

    deleteArticle = () => {
        const id = this.props.match.params.id;
        axios.delete(`/api/articles/${id}`).then(() => {
            this.props.history.push('/browse')
        })
    }

    render(){
        const style = {
            'maxWidth': '200px',
            'maxHeight': '200px'
        }
        const {user} = this.props;
        const article = this.state.article.map(article => {
            return <div>
                <IndividualArticle article={article}/>
                {
                    user && user.user_id === article.user_id ?
                    <div>
                        Title: <input name='title' onChange={(e) => this.handleInputs(e)}/>
                        Photo: <input name='photo' onChange={(e) => this.handleInputs(e)}/>
                        Content: <input name='content' onChange={(e) => this.handleInputs(e)}/>
                        <button onClick={() => this.updateArticle()}>Submit</button>
                        <button style={{background: 'red'}} onClick={() => this.deleteArticle()}>Delete Article</button>
                    </div>
                    :
                    <></>
                }
            </div>
        })
        return <div>
            {article}
            
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SingleArticle);