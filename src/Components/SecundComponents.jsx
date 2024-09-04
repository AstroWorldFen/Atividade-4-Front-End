import React, { useState } from 'react';

const SecundComponents = () => {
  const items = [
    { id: 1, nome: 'Maçã', cor: 'Vermelho', preço: 'R$ 3,00' },
    { id: 2, nome: 'Banana', cor: 'Amarelo', preço: 'R$ 2,00' },
    { id: 3, nome: 'Laranja', cor: 'Laranja', preço: 'R$ 2,50' },
    { id: 4, nome: 'Uva', cor: 'Roxo', preço: 'R$ 5,00' },
    { id: 5, nome: 'Pera', cor: 'Verde', preço: 'R$ 4,00' }
  ];

  const [sortOrder, setSortOrder] = useState('id'); // 'id' ou 'name'

  const handleSortById = () => {
    setSortOrder('id');
  };

  const handleSortByName = () => {
    setSortOrder('name');
  };

  const sortedItems = sortOrder === 'id'
    ? [...items].sort((a, b) => a.id - b.id) 
    : [...items].sort((a, b) => a.nome.localeCompare(b.nome)); 

  return (
    <div>
      <h1>Lista de Itens</h1>
      <button onClick={handleSortById}>
        Ordenar por ID
      </button>
      <button onClick={handleSortByName}>
        Ordenar por Nome
      </button>
      <ol>
        {sortedItems.map(item => (
          <li key={item.id}>
            <p><strong>Nome:</strong> {item.nome}</p>
            <p><strong>Cor:</strong> {item.cor}</p>
            <p><strong>Preço:</strong> {item.preço}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SecundComponents;



