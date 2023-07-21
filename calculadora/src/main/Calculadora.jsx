import React, {Component} from "react";
import './Calculadora.css'
import Button from '../componentes/Button'
import Display from '../componentes/Display'

const inicialState = {
    displayValue: '0',
    clearDisplay: false,
    opetarion: null,
    valures: [0, 0],
    current:0,
}

export default class Calculator extends Component {

     state = {...inicialState}
    clearMemory(){
        this.setState({...inicialState})
    }

    setOperation(operation){
        console.log(operation)
    }
    AddDigit (n){
        if (n ==='.'&& this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay:false})

    
    }

    render (){
        const AddDigit = n => this.AddDigit(n)
        const setOperation = op => this.setOperation(op)
        const clearMemory = l => this.clearMemory(l)
        return(
            <div className="calculadora">
                <Display value={this.state.displayValue}/>
                <Button label= "AC" click={clearMemory} triple />
                <Button label = "/"click ={setOperation} operation/>
                <Button label = "7" click = {AddDigit}/>
                <Button label = "8"click = {AddDigit}/>
                <Button label = "9"click = {AddDigit}/>
                <Button label = "*"click ={setOperation}operation/>
                <Button label = "4"click = {AddDigit}/>
                <Button label = "5"click = {AddDigit}/>
                <Button label = "6"click = {AddDigit}/>
                <Button label = "-" click ={setOperation} operation/>
                <Button label = "1"click = {AddDigit}/>
                <Button label = "2"click = {AddDigit}/>
                <Button label = "3"click = {AddDigit}/>
                <Button label = "+"click ={setOperation} operation/>
                <Button label = "0"click = {AddDigit} double/>
                <Button label = "."click = {AddDigit} />
                <Button label = "= "click ={setOperation} operation/>
            </div>
        )
    }
    
}