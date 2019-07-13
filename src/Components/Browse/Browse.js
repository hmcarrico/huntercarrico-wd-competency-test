import React, { Component } from 'react';
import Article from './Article';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import './Browse.scss';

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
        const { user } = this.props;
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
            <div className='browse__container'>
                <h1>ARTICLES</h1>
                <div className='browse'>
                    <Link to={user ? '/browse/entertainment' : '/'}>
                        <h2>Entertainment</h2>
                    </Link>
                    {entertainmentMap}
                    <br />
                    <Link to={user ? '/browse/politics' : '/'}>
                        <h2>Politics</h2>
                    </Link>
                    {politicsMap}
                    <br />
                    <Link to={user ? '/browse/sports' : '/'}>
                        <h2>Sports</h2>
                    </Link>
                    {sportsMap}
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

export default connect(mapStateToProps)(Browse);