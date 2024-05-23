import { useState } from 'react'
import './styles.css'

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState(''); /*Hook*/
    return (
        <input
            type="search"
            placeholder="Digite o que você procura"
            className='barra-pesquisa'
            value={termoPesquisa}
            onChange={(evento) => setTermoPesquisa(evento.target.value)}
        />
    )
}

/*
    onChange --> Monitora alterações no input, captura o evento de digitação. 

    Utilizando a função setTermoPesquisa, atribui o valor do campo de digitação à variável de estado, termoPesquisa. Como resultado, o value do input é modificado conforme o que a pessoa usuária digita.
*/

