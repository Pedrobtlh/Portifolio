import style from './Navbar.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';





function Navbar() {


  return (
    <div className={style.navbar}>
      <h1>Bem vindo ao meu <span className={style.gradientText}>Portifólio</span></h1>
      <div className={style.iconsNavbar} >
       <a href='https://github.com/Pedrobtlh' target="_blank"> <FaGithub className={style.icon}/></a>
       <a href="https://linkedin.com/in/pedro-henrique-botelho/" target="_blank"> <FaLinkedin className={style.icon}/> </a>
       <a href="https://www.instagram.com/pedrobtlh/?hl=pt-br" target="_blank"> <FaInstagram className={style.icon}/> </a>
      </div>
    </div>
  );
}

export default Navbar;