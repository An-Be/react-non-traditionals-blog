const BlogCard = ({blog}) => {
    const MAX_LENGTH = 250;
    return(
        

        <div className='blogCardContainer'>
            <h1>{blog.title}</h1>
            {blog.content.length > 250 ? <p>{blog.content.substring(0, MAX_LENGTH)}</p> : <p>{blog.content}</p>}
            <p><em>{blog.topic}</em></p>
        </div>
    )
}
export default BlogCard;