import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';
  currSlide:number = 0;
  slides:any[] = [
    {title:"Сбор урожая", image:"1.svg", first:{
      title:"Ручной сбор", description:"", list:[
        {color:"#B4DFAF", marker:"+", text:"тщательный отбор только спелых ягод"},
        {color:"#EC8B96", marker:"-", text:"низкая скорость"}
      ]
    }, second:{
      title:"Механический сбор", description:"", list:[
        {color:"#B4DFAF", marker:"+", text:"высокая скорость"},
        {color:"#EC8B96", marker:"-", text:"при сборе нельзя отделить незрелые и&nbsp;перезрелые ягоды"}
      ]
    }, end:"Nespresso используют только ручной сбор, ведь кофейное дерево зреет неравномерно, и&nbsp;только ручная сборка позволяет добиться постоянства качества и&nbsp;отобрать только спелые ягоды."},
    {title:"Обработка зерна", image:"21.svg", first:{
      title:"Сухая обработка", description:"Ягоды сушат на&nbsp;бетонных, глиняных патио или просто на&nbsp;земле", list:[
        {color:"#B4DFAF", marker:"+", text:"яркость и&nbsp;насыщенность вкуса"},
        {color:"#EC8B96", marker:"-", text:"риск получить землистый привкус и&nbsp;выраженную горчинку"}
      ]
    }, second:{
      title:"Влажная обработка", description:"Ягоды очищают от&nbsp;кожуры и&nbsp;держат в&nbsp;воде, пока от&nbsp;зерен не&nbsp;отойдет клейковина, а&nbsp;затем сушат на&nbsp;специальных настилах или мешковине.", list:[
        {color:"#B4DFAF", marker:"+", text:"интересная кислинка во&nbsp;вкусе, раскрытие ароматического потенциала"},
        {color:"#EC8B96", marker:"-", text:"дороговизна, несколько этапов контроля"}
      ]
    }, end:"Nespresso выбирает влажный метод обработки, потому что он&nbsp;позволяет лучше подчеркнуть вкусовые качества кофе и&nbsp;смягчить горчинку."},
    {title:"Упаковка", image:"3.png", first:{
      title:"", description:"", list:[
        {color:"#ED8CA1", marker:"1", text:"Пластик"},
        {color:"#ED8CA1", marker:"2", text:"Стекло"},
        {color:"#ED8CA1", marker:"3", text:"Вакуумный пакет"},
        {color:"#ED8CA1", marker:"4", text:"Алюминиевая капсула"}
      ]
    }, second:undefined, end:"Вкус и&nbsp;аромат натурального кофе Nespresso надежно защищены от&nbsp;воздействия влаги, солнечных лучей и&nbsp;кислорода алюминиевой капсулой вплоть до&nbsp;момента приготовления напитка."},
    {title:"Обжарка", image:"4.svg", first:{
      title:"", description:"", list:[
        {color:"#ED8CA1", marker:"1", text:"Скандинавская, t = 195-205 &deg;С<br><span>идеальна для кофе с&nbsp;молоком</span>"},
        {color:"#ED8CA1", marker:"2", text:"Американская, t = 210-220 &deg;С<br><span>сладкие нотки с&nbsp;кислинкой</span>"},
        {color:"#ED8CA1", marker:"3", text:"Венская, t = 230-234 &deg;C<br><span>небольшая горчинка, подходит для эспрессо</span>"}
      ]
    }, second:{
      title:"", description:"", list:[
        {color:"#ED8CA1", marker:"4", text:"Французская, t = 240&nbsp;&deg;С<br><span>насыщенный и&nbsp;крепкий эспрессо</span>"},
        {color:"#ED8CA1", marker:"5", text:"Итальянская, t = 245&nbsp;&deg;С<br><span>аромат карамели, терпкий вкус</span>"},
        {color:"#ED8CA1", marker:"6", text:"Испанская, t = 250&nbsp;&deg;С<br><span>яркие оттенки обжарки во&nbsp;вкусе</span>"}
      ]
    }, end:"В&nbsp;Nespresso разработали специальные способы обжарки для каждого бленда, чтобы подчеркнуть особенности сортов кофе. Для каждого сорта используется раздельная обжарка при разных температурах, чтобы определить равновесие между кислинкой/горчинкой, плотностью и&nbsp;ароматом."},
    {title:"Помол", image:"5.png", first:{
      title:"", description:"", list:[
        {color:"#F4E477", marker:"1", text:"Крупный<br><span>подходит для френч-пресса</span>"},
        {color:"#F4E477", marker:"2", text:"Средний<br><span>подходит для капельной и&nbsp;гейзерной кофеварки</span>"}
      ]
    }, second:{
      title:"", description:"", list:[
        {color:"#F4E477", marker:"3", text:"Тонкий<br><span>подходит для эспрессо-машин</span>"},
        {color:"#F4E477", marker:"4", text:"Сверхтонкий<br><span>подходит для турки</span>"}
      ]
    }, end:"Разные техники помола позволяют раскрыть индивидуальные вкусовые особенности каждого сорта. Внутри капсул Nespresso используются самые разные виды помола от&nbsp;сверхтонкого до&nbsp;крупного в&nbsp;зависимости от&nbsp;ароматического потенциала зерен."}
  ];

  switchSlide(shift: number){
    this.currSlide += shift;

    if(this.currSlide < 0){
      this.currSlide = this.slides.length - 1;
    } else if(this.currSlide > this.slides.length - 1){
      this.currSlide = 0;
    }
  }
}
