import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import me from '../assets/Alokpng.jpg'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="Alok Chaurasiya" />
            <h2>ALOK CHAURASIYA</h2>
            <p>"Life is like riding a bicycle. To keep your balance, you must keep moving.”</p>
            <span>—Albert Einstein</span>
        </div>
        <aside>
            <h2>Get In Touch</h2>
            <article>
                <a href="https://www.linkedin.com/in/alok-chaurasia/" target={"blank"}><AiFillLinkedin/></a>
                <a href="https://www.instagram.com/littlebit_x04?igsh=MXc2djd1OWwxcDRxYQ==" target={"blank"}><AiFillInstagram/></a>
                <a href="https://github.com/alokchaurasiya" target={"blank"}><AiFillGithub/></a>
                <a href="https://wa.me/+919565103958" target={"blank"}><AiOutlineWhatsApp/></a>
                <a href="https://twitter.com" target={"blank"}><AiOutlineTwitter/></a>
            </article>
        </aside>
        {/* <p>&copy; 2023 Alok Chaurasiya</p> */}
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer;