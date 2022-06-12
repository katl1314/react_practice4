import "./App.css";
import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import Nav from "./components/Nav";
import NowLoading from "./components/NowLoading";
import getJsonList from "./js/ajax";

class App extends React.Component {
    state = {
        article: {
            item: {
                title: "Welcome",
                description: "Hello, React & Ajax",
            },
            isLoading: false,
        },
        list: {
            items: [],
            isLoading: false,
        },
    };

    componentDidMount() {
        var newList = Object.assign({}, this.state.list.items, {
            isLoading: true,
        });

        this.setState({ list: newList });
        getJsonList((json) => {
            this.setState({
                list: {
                    items: json,
                    isLoading: false,
                },
            });
        });
    }

    render() {
        var NavTag = null;
        var ArticleTag = null;
        if (this.state.list.isLoading) {
            NavTag = <NowLoading />;
        } else {
            NavTag = (
                <Nav
                    list={this.state.list.items}
                    onClick={(id) => {
                        var newArticle = Object.assign({}, this.state.article, {
                            isLoading: true,
                        });
                        this.setState({ article: newArticle });
                        getJsonList((json) => {
                            var myArticle = json.find((d) => d.id === id);
                            this.setState({
                                article: {
                                    item: myArticle,
                                    isLoading: false,
                                },
                            });
                        });
                    }}
                />
            );
            ArticleTag = (
                <Article
                    title={this.state.article.item.title}
                    description={this.state.article.item.description}
                />
            );
        }
        return (
            <div>
                <h2>WEB</h2>
                {NavTag}
                {ArticleTag}
            </div>
        );
    }
}

export default App;
