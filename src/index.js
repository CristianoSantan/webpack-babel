import React from 'react';
import ReactDOM from 'react-dom';

const meuNome = 'Cristiano';

ReactDOM.render(<div>Nome: {meuNome}</div>, document.querySelector('#app'));

console.log('Funcionou tudo junto');
