import React from "react";
import './footer.css';
import ButtonPopUp from "../button-pop-up";
import { Component } from 'react';
// import Container from "../container";


export default class Footer extends Component {
    
    state = {
        valueName: '',
        valueTel: '',
        textareaValue: 'Please, enter your message',
        isPress: false
        
    }


    handleChange = (e) => {
        const target = e.target;
        const value = (target.name === 'text') ? target.value : 
        (target.type === 'tel') ? target.value :
        target.value;

        const name = target.name;
        this.setState({
            [name]: value,
        });
        //console.log(target.name)
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`enter: ${this.state.valueName}, ${this.state.valueTel}, ${this.state.textareaValue}`);
    };
    handleClick = () => {
        console.log('click me, baby');
        
    };
    render() {
        const { myName } = this.props;
        let btnClassName= 'btn callme'

        // if(isPress){
        //     btnClassName += 'isPress';
        // }
        return (
            <footer>
                <form className = 'call-me-form'
                      onSubmit={this.handleSubmit}>
                    <input type='text'
                           name='valueName'
                           className='enter-text'
                           placeholder='enter your name'
                           value={this.state.valueName}
                           onChange={this.handleChange}/>

                    <input type='tel'
                           name='valueTel'
                           className='enter-tel'
                           placeholder='enter your phone'
                           value={this.state.valueTel}
                           onChange={this.handleChange}/>

                    <textarea name='textareaValue'
                              className='enter-message'
                              value={this.state.textareaValue}
                              onChange={this.handleChange}/> 
                    <input type='submit'
                           className={btnClassName} value='Отправить'/>

                </form>
                <ButtonPopUp />
    
                <div className = 'copyright'>© { myName }</div>
    
            </footer>
    
        );

    }
}