import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './components/BarraDePesquisa'
import Card from './components/Card'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Sidebar from './components/Sidebar'

function App() {
  const [dados, setDados] = useState([]); // Vamos receber um objeto

  {/*Fazendo requisição na API */ }
  {/*Utilizando uma função Callback */ }
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(resposta => resposta.json())
      .then(dados => setDados(dados))
  }, [])

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
                /*Utilizo props para enviar propriedades para o card --> comunicar componente pai e filho*/
                id={item.id}
                imagemUrl={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )) : null}

        </ul>
      </div>
    </div>
  )
}

export default App

/* Linha 28 --> Utilizo chaves para usar JS e com o map, faço o mapamento de cada item da lista ! */


