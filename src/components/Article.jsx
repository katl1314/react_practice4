var Article = (props) => {
    return (
        <article className="article">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </article>
    );
};

export default Article;
