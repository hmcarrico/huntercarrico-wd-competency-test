import React, { Component } from 'react';
import Article from './Article';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';

class DetailedBrowse extends Component {
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
            <div>
                { user ?
                    <div>
                        BROWSE ARTICLES
                        <Link to='/browse/entertainment'><h1>Entertainment</h1></Link>
                        {entertainmentMap}
                        <Link to='/browse/politics'><h1>Politics</h1></Link>
                        {politicsMap}
                        <Link to='/browse/sports'><h1>Sports</h1></Link>
                        {sportsMap}
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

export default connect(mapStateToProps)(DetailedBrowse);