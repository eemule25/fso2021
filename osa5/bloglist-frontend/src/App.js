import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import './App.css';


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [formVisible, setFormVisible] = useState(false)
  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (event) => {
    blogFormRef.current.toggleVisibility()
    event.preventDefault()
    const blogObject = {
      title,
      author,
      url
    }

    blogService
    .create(blogObject)
    .then(returnedBlog => {
      setBlogs(blogs.concat(returnedBlog))
      setNewBlog('')
    })

    setErrorMessage(`A new blog ${title} by ${author} added!`)
    setTimeout(() => {
      setErrorMessage(null)
    }, 3000)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      setUser(user)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({username, password})
      //blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      setErrorMessage(`${username} logged in`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    } catch (expection) {
      setErrorMessage('wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  const logOut = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
    setErrorMessage('logged out')
    setTimeout(() => {
      setErrorMessage(null)
    }, 3000)
  }

    if(user === null) {
      return (
        <div>
          <Notification message={errorMessage} />
          <h2>Log in to application</h2>
          <form onSubmit={handleLogin}>
            <div>
              Username: <input type="text" value={username} name="Username" 
              onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div>
              Password: <input type="password" value={password} name="Password" 
              onChange={({ target }) => setPassword(target.value)} />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )
    }
  
    return (
      <div>
        <Notification message={errorMessage} />
        <h2>Blogs</h2>
        <p>{user.name} logged in  
        <button onClick={logOut}>Logout</button> </p>

        <Togglable buttonLabel="Create new blog" ref={blogFormRef}>
          <BlogForm createBlog={addBlog} setTitle={setTitle} setAuthor={setAuthor}
                    setUrl={setUrl} title={title} author={author} url={url}/>
        </Togglable>

        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
}

export default App