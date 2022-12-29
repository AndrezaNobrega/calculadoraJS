class CalcController {
    constructor(){
        //acessamos o HTML 
        this._locale = 'pt-BR'
        this.displayCalclEl = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");
         // _ indicada privado
        this._currentDate;
        this.initialize();
    }

    //função principal da calculadora   
    initialize(){
        this.setDisplayDateTime();
        //set interval -> executa uma função a cada x tempo
       setInterval( () => {
                this.setDisplayDateTime();
       }, 1000);
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
    //getters e setters 
    // o display cal pega diretamente o valor que está sendo exibido na tela
    get displayCalc(){
        return this._displayCalcEL.innerHTML;
    }
    get displayTime(){
        return this.timeEl.innerHTML;
    }
    get displayDate(){
        return this.dateEl.innerHTML;
    }

    set displayTime(value){
        return this.timeEl.innerHTML = value
    }
    set displayDate(value){
        return this.dateEl.innerHTML = value;
    }


    set displayCalc(valor){
        this._displayCalcEL.innerHTML = valor;
    }
    get currentDate(){
        return new Date();
    }
    set currentDate(valor){
        this._currentDate = valor;
    }

}