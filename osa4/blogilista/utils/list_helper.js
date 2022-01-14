const blog = require("../models/blog");

const dummy = (blogs) => {
    return 1;
  }

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)
}

const favoriteBlog = (blogs) => {
    blogs.sort(function(a, b) {
        return b.likes - a.likes;
    })
    return blogs[0]
}


module.exports = {
dummy,
totalLikes,
favoriteBlog
}