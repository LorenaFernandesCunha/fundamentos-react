import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import Card from './components/layouts/Card'
import ComProps from './components/ComProps'
import ComFilhos from './components/ComFilhos.jsx'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

export default (props) => (

    <div className="App">
        <Card titulo="Condicional">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Filho01</li>
                    <li>Filho02</li>
                    <li>Filho03</li>
                    <li>Filho04</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componente com Props">
        <ComProps
            titulo="Titulo"
            subtitulo="Subtitulo Props" />
        </Card>
        <Card titulo="Primeiro Componente">
        <Primeiro/>
        </Card>
    </div>
); 