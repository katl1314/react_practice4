import "./App.css";
import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import Nav from "./components/Nav";
import getJsonList from "./js/ajax";

function App() {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [list, setList] = useState([]);

    // render이후 단 한번 호출함. (componentDidMount)
    useEffect(() => {
        getJsonList(setList);
    }, []);

    // setTitle시 title이 변경되면 호출
    useEffect(() => {
        document.title = title;
    }, [title]);

    const setUpdateJsonList = (data, id) => {
        const { title, description } = data.find((d) => d.id === id);
        setTitle(title);
        setArticle(description);
    };

    return (
        <div className="App">
            <header>
                <h2>WEB</h2>
            </header>
            <Nav
                list={list}
                onClick={(id) => {
                    getJsonList((data) => {
                        setUpdateJsonList(data, id);
                    });
                }}
            />
            <Article title={title} article={article} />
        </div>
    );
}

export default App;
