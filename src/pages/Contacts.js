import {FaPhone,FaEnvelope} from 'react-icons/fa'
const Contacts = () => {
    return (
        <>
            <section className="contacts">
            <h1>Contact me</h1>
                <ul>
                    <li>
                        <a href="tel: 0700123456"> 
                        <FaPhone/>{" "} 
                        +254 (0) 700 123 456</a> 
                    </li>
                    <li>
                        <a href="mailto:ujwaldanta@gmail.com">
                        <FaEnvelope/>{" "} 
                        ujwaldanta@gmail.com</a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Contacts
