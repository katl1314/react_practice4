import React from "react";

var Nav = (props) => {
    const listTag = props.list.map(({ id, title }) => {
        return (
            <li key={id}>
                <a
                    href={id}
                    onClick={(e) => {
                        e.preventDefault();
                        props.onClick(id);
                    }}
                >
                    {title}
                </a>
            </li>
        );
    });
    return <ul>{listTag}</ul>;
};

export default Nav;
