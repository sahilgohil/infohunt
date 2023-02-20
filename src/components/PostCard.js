import { Link } from "react-router-dom"
import blogData from './blogData'
import BlogCard from './BlogCard'

function PostCard()
{
   
    const blogElements = blogData.map(post => {
        return (<BlogCard post = {post}/>)
    })
   

    return(
        <main className="main-container">
            {blogElements}
            {/* <section className="main-post">
                <img className="main-image" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="blog1" />
                <p className="main-date">AUGUST 20, 2022</p>
                <h2 className="main-heading">Best practices for creating responsive web designs</h2>
                <p className="main-body">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>
            
            <section className="main-post">
                <img className="main-image" src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <p className="main-date">AUGUST 20, 2022</p>
                <h2 className="main-heading">Tips for improving your HTML and CSS skills</h2>
                <p className="main-body">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>
            
           
            <section className="main-post wider">
                <img className="main-image" src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <p className="main-date">AUGUST 20, 2022</p>
                <h2 className="main-heading">How to use JavaScript to enhance user experience</h2>
                <p className="main-body">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>
            <section className="main-post wider">
                <img className="main-image" src="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <p className="main-date">AUGUST 20, 2022</p>
                <h2 className="main-heading">How to build a portfolio website using frontend development skills</h2>
                <p className="main-body">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>
            <section className="main-post wider">
                <img className="main-image" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                <p className="main-date">AUGUST 20, 2022</p>
                <h2 className="main-heading">Tips for collaborating effectively as a frontend developer in a team environment.</h2>
                <p className="main-body">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>
            
            
             */}
        </main>
    )
}
export default PostCard