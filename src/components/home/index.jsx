import React from 'react';
import styles from './Index.module.css';

export default function Home() {
  return (
    <section className={styles.secContainer} id="home">
      <div className={styles.header}>
        <a className={styles.logo} href="#home">
          <img src="src/img/LOGO.svg" alt="Logo Header" />
        </a>
        <ul className={styles.nav}>
          <li className={styles.bntNav} id={styles.home}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.bntNav} id={styles.sobre}>
            <a href="#sobre">Sobre</a>
          </li>
          <li className={styles.bntNav} id={styles.skills}>
            <a href="#skills">Skills</a>
          </li>
          <li className={styles.bntNav} id={styles.projetos}>
            <a href="#projetos">Projetos</a>
          </li>
          <li className={styles.bntNav} id={styles.contatos}>
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <div></div>
      </div>

      <div className={styles.contentHome}>
        <div className={styles.textsHome}>
          <h1 className={styles.tituloHome}>
            Olá me chamo André Parolin
            <br />
            sou programador <span className={styles.spanP}>Front-end</span>
          </h1>
          <p className={styles.textoHome}>Sempre explorando novas possibilidades no mundo digital</p>
        </div>
      </div>
    </section>
  );
}