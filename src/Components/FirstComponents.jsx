import React from 'react';

const FirstComponents = () => {
  const nome = 'João';
  const sobrenome = 'Vitor';
  const matricula = '2314290084';
  const professor = 'Prof. Felipe';
  const disciplina = 'Front-End';

  return (
    <div>
      <h1>Informações Pessoais</h1>
      <p>Nome Completo: {nome} {sobrenome}</p>
      <p>Matrícula: {matricula}</p>
      <h2>Informações do Curso</h2>
      <p>Professor: {professor}</p>
      <p>Disciplina: {disciplina}</p>
    </div>
  );
};

export default FirstComponents;
