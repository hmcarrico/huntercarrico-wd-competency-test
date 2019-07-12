import React from 'react';
import {Link} from 'react-router-dom'

function Article(props){
    return <div>
        {props.article.title}
        {props.article.content}
        <Link to={`/article/${props.article.article_id}`}><button>View Article</button></Link>
    </div>
}

export default Article;