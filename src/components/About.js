import Header from './Header'
import Footer from './Footer'

function About()
{
    return(
        <div>
            <Header />
            <main className="about-main-container">
                <section className="aboutme">
                    <img src={require('../img/download.png')} alt="sahil profile picture" className="profile-avatar"/>
                    <div>
                        <h1 className="image-heading">Hi there! My name is Sahil and welcome to my Blog for beginners guide to front end developemnt.</h1>
                        <p className="image-body">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                    </div>
                </section>
                <section className="qanda-section">
                    <h2 className="question">How I stay committed to learning</h2>
                    <p className="answer">I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.
                    While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                    
                    <h2 className="question space">How I got started</h2>
                    <p className="answer">I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.

                    hat helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                </section>
        </main>
        <Footer />
    </div>
    )
}

export default About