import style from './MainContent.module.css'
import img from '../img/img.png'

function MainContent (){

    return(
        <div className={style.mainContent}>
            <img src={img} alt='Minha foto'/>
            <h2>Sobre mim</h2>
            <hr/>
            <p className='animate__animated animate__fadeInLeft'> Sou um estudante de Análise e Desenvolvimento de Sistemas com um profundo interesse em seguir carreira na área de Front-end, e futuramente Full-Stack . Possuo habilidades sólidas em JavaScript, conhecimento em Rest API , em NodeJs, experiência em projetos de desenvolvimento web. Estou entusiasmado e dedicado a aprimorar ainda mais minha apitidão em Front-end, buscando constantemente ampliar meus conhecimentos e experiências nesse campo.</p>
        </div> 
    )
}

export default MainContent