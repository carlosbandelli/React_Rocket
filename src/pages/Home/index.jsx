import {Card} from '../../components/Card'
import './style.css'

export function Home() {
  return (
    <div className="container">
     <h1>Lista de presença</h1>
     <input type="text" placeholder="Digite o seu nome..."/>
     <button type="button">Adicionar</button>
     <Card name="Carlos" time="10:55:25"/>
     <Card name="arumaito" time="11:00:10"/>
    </div>
  )
}

