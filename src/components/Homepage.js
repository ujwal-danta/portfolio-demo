import {FaLinkedin,FaGithub} from 'react-icons/fa'
const Homepage = () => {
    return (
        <>
        <section className="homepage">
            <div className="overlay">
            <h1>Ujwal danta</h1>
            <p>Budding Web Developer</p>

        <ul>
            <li>
                <a href="https://www.linkedin.com/in/ujwal-danta-038509203/" target="_blank" rel="noopenner norefferer">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="https://github.com/ujwal-danta" target="_blank" rel="noopenner norefferer">
                    <FaGithub />
                </a>
            </li>
        </ul>
            </div>
       
        </section>
            
        </>
    )
}

export default Homepage
