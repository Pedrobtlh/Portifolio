import style from "./Projetos.module.css";

import { motion } from "framer-motion";

//IMAGENS
import image1 from "../img/img1.png";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.png";

import { useState, useEffect, useRef } from "react";

const images = [image1, image2, image3];
const links = [
  "https://adotepetss.netlify.app/",
  "https://mariogamespedrobtlh.netlify.app",
  "https://pedrobtlh.github.io/Organo/",
];

function Projetos() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className={style.container}>
      <h2>Meus Projetos</h2>
      <hr />
      <motion.div
        ref={carousel}
        className={style.containerProjetos}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={style.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div className={style.images} key={index}>
              <a href={links[index]} target="_blank">
                <img src={image} alt="Projetos" />
                <p>Acesse o Projeto</p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projetos;
