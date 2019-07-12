import React, { Component } from 'react';
import Article from './Article';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Browse extends Component {
    constructor(){
        super();
        this.state = {
            entertainment: [],
            politics: [],
            sports: [],
        }
    }

    componentDidMount(){
        axios.get('/api/articles').then(res => {
            if((typeof res.data) === 'object'){
                let entertainment = [];
                let politics = [];
                let sports = [];
                res.data.forEach(article => {
                    article.category === "entertainment" ? entertainment.push(article): article.category === "politics" ? politics.push(article) : article.category === "sports" ? sports.push(article) : console.log('none')
                })
                if(entertainment.length > 3){
                    entertainment.splice(2, entertainment.length - 3)
                }
                if(politics.length > 3){
                    politics.splice(2, politics.length - 3)
                }
                if(sports.length > 3){
                    sports.splice(2, sports.length - 3)
                }
                this.setState({
                    entertainment: entertainment,
                    politics: politics,
                    sports: sports
                })
            }
        })
    }

    render(){
        const { entertainment, politics, sports } = this.state;
        const entertainmentMap = entertainment.map(article => {
            return <Article article={article}/>
        })
        const politicsMap = politics.map(article => {
            return <Article article={article}/>
        })
        const sportsMap = sports.map(article => {
            return <Article article={article}/>
        })
        return (
            <div>
                BROWSE ARTICLES
                <Link to='/browse/entertainment'><h1>Entertainment</h1></Link>
                {entertainmentMap}
                <Link to='/browse/politics'><h1>Politics</h1></Link>
                {politicsMap}
                <Link to='/browse/sports'><h1>Sports</h1></Link>
                {sportsMap}
            </div>
        )
    }
}

export default Browse;