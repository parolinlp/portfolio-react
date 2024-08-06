import React from 'react';
import Home from "./components/home";
import Sobre from "./components/sobre";
import Skills from "./components/skills";
import Projetos from "./components/projetos";
import Contato from "./components/contatos";

// Importa o comportamento de rolagem suave
import './components/scroll/scrollBehavior';

export default function App() {
  return (
    <>
      <Home />
      <Sobre />
      <Skills />
      <Projetos />
      <Contato />
    </>
  );
}