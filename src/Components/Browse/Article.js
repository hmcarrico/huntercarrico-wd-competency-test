import React from 'react';

function Article(props){
    console.log(props)
    return <div>
        {props.article.title}
        {props.content}
    </div>
}

export default Article;