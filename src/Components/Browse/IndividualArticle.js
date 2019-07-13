import React from 'react';
import {Link} from 'react-router-dom';
import './Browse.scss';

function IndividualArticle(props){
    return <div className='article__individual'>
        <div>
            {props.article.title}
        </div>
        <div>
            <img src={props.article.image} />
        </div>
        <div>
            <p>{props.article.content}</p>
        </div>
        
    </div>
}

export default IndividualArticle;