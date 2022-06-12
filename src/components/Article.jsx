var Article = (props) => {
    return (
        <article className="article">
            <h2>{props.title}</h2>
            <p>{props.article}</p>
        </article>
    );
};

export default Article;
