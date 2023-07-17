import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;

  modifyLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  modifyLetters(){ /*checkbox'a tıklayınca true, false değiştirmek için */
    this.includeLetters = !this.includeLetters; /* Tıklayınca tersine eşitledik ki true ise false, false ise true olsun. */
  }

  modifyNumbers(){ 
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols(){ 
    this.includeSymbols = !this.includeSymbols;
  }
  
  buttonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghiklmnopqrstuvwxyz';
    const symbols = '!@#$%^&_-*()';
    
    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    
    

    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

}
