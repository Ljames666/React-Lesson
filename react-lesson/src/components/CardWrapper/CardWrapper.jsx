import { Card } from "../Card/Card"
import './style.css';

export const CardWrapper = () => {
    return (
        <div className="wrapper">
            <Card titulo="Titulo do card com param" texto="Este é o texto do meu card"></Card>        
            <Card titulo="Titulo 1" texto="Este é o texto do meu card"></Card>        
            <Card titulo="Titulo 2" texto="Aula React"></Card>        
            <Card titulo="Titulo 3" texto="Este é o texto do meu card"></Card>
        </div>
    )
}
