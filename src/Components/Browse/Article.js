import React from 'react';
import {Link} from 'react-router-dom';
import './Browse.scss';

function Article(props){
    return <div className='article'>
        <div>
            {props.article.title}
        </div>
        <div>
            <img src={props.article.image} />
        </div>
        <div>
            <Link to={`/article/${props.article.article_id}`}>
                <button>
                    View Article
                </button>
            </Link>
        </div>
    </div>
}

export default Article;