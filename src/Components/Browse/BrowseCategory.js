import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux'
import axios from 'axios';

class BrowseCategory extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        const { category } = this.props.match.params;
        axios.get(`/api/typeArticles?category=${category}`).then(res => {
            if((typeof res.data) === 'object'){
                this.setState({
                    articles: res.data
                })
            }
        })
    }

    render(){
        const { articles } = this.state;
        const { user } = this.props;
        const mappedArticles = articles.map(article => {
            return <Article article={article}/>
        })
        return (
            <div>
                { user ?
                <div>
                    {
                        articles[0] &&
                        <h1>{articles[0].category}</h1>
                    }
                    {mappedArticles}
                </div>
                :
                <div>
                    {this.props.history.push('/')}
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(BrowseCategory);