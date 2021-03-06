import React from "react";

const BlogForm = ({
    createBlog,
    setTitle,
    setAuthor,
    setUrl,
    title,
    author,
    url
}) => {

    return (
        <div>
            <h2>Create new</h2>
            <form onSubmit={createBlog}>
                <div>
                    Title: <input type="text" value={title} name="Title" 
                    onChange={({ target }) => setTitle(target.value)} />
                </div>
                <div>
                    Author: <input type="text" value={author} name="Author" 
                    onChange={({ target }) => setAuthor(target.value)} />
                </div>
                <div>
                    Url: <input type="text" value={url} name="Url" 
                    onChange={({ target }) => setUrl(target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default BlogForm