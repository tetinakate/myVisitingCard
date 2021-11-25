import React, { Component } from "react";

import AppHeader from "./components/app-header";
import AboutMe from "./components/info";
import MySkills from "./components/my-skills/my-skills";
import Practice from "./components/practice";
import Footer from "./components/Footer/footer";
import SearchInfo from "./components/search-info/search-info";


export default class App extends Component {

  state={
    term: '',
  };
  search(items, term){
    if(term.length === 0){
      return items;
    }
    return items.filter((item) => {
      return item.indexOf(term) > -1;
    });
  };
  onChangeSearch = (term) => {
    this.setState({term});
  };

  render(){
    const { term } = this.state;
    const myName = 'Екатерина Тетина';
    const myProffesion = 'frontend developer';
    const myPractice = [
            'создание и изменение страниц сайта, метатегов',
            'размещение кодов счетчиков или других аналитических сервисов',
            'изменение адресов страниц, создание ЧПУ',
            'настройка редиректов',
            'изменение оформления отдельных элементов страницы (сайта)',
            'формирование карты сайта',
            'поиск и устранение неисправностей в работе сайта',
            'поиск и устранение вредоносного кода (вирусов) на сайте, а также устранение уязвимостей',
            'создание форм обратной связи, обратного вызова',
            'создание галереи изображений',
            'создание функциональных динамических элементов различного рода (всплывающие меню, всплывающие или выпадающие окна и т.п.)',
          ];
    const mySpecialty = 'Программист отдела технической оптимизации Demis Group';
    const visiblePractice = this.search(myPractice, term);
  
  
    return (
      <div className = 'main'>
  
        <AppHeader myName={myName} myProffesion ={myProffesion} />

        <SearchInfo onChangeSearch={this.onChangeSearch}/>
        
        <div className = 'about-me'>
  
          <AboutMe />
          <MySkills />
          <Practice mySpecialty={mySpecialty} myPractice = {visiblePractice} />
  
        </div>
  
        <Footer myName={myName} onButtonClick={this.onButtonClick} />
  
      </div>
    );

  }

}