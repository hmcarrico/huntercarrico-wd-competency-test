import React, { Component } from 'react';
import Article from './Article';
import axios from 'axios';

class Browse extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        axios.get('/api/articles').then(res => {
            this.setState({
                articles: res.data
            })
        })
    }

    render(){
        const { articles } = this.state;
        const displayArticles = articles.map(article => {
            return <Article article={article}/>
        })
        return (
            <div>
                BROWSE ARTICLES
                {displayArticles}
            </div>
        )
    }
}

export default Browse;