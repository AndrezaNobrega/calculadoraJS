class CalcController {
    constructor(){
        this._operation = [];
        //acessamos o HTML 
        this._locale = 'pt-BR'
        this.displayCalclEl = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");
         // _ indicada privado
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    //função principal da calculadora   
    initialize(){
        this.setDisplayDateTime();
        //set interval -> executa uma função a cada x tempo
       setInterval( () => {
                this.setDisplayDateTime();
       }, 1000);
    }

    addEventListenerAll(element, events, fn){
        //percorrendo a lista de eventos usando split
        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });
    }

    clearAll(){
        //método referente ao btn ca, deve exluir todas as operações
        this._operation = [];
    }

    clearEntry(){
        //método referente ao btn cE, logo devemos excluir a última entrada
        this._operation.pop();

    }

    setError(){
        this.displayCalc = "Error";
    }


    getLastOperation(){
        return this._operation[his._operation.length-1];
    }

    //método verifica se é operador
    isOperator(value){
        return (['+', '-', '*', '%', '/'].indexOf(value)> -1);
    }

    setLastOperation(value){
        this._operation[his._operation.length-1] = value;
    }
    //um novo valor à lista de operações
    addOperation(value){
        if (isNaN(this.getLastOperation())){
            //string
            if(this.isOperator(value)){
                //troca de operador
                this.setLastOperation(value);
            }else if(isNaN(value)){
                //outra ação
            }else{
                //se ele chega a essa condição, é a primeira vez que estamos clicando na calculadora
                this._operation.push(value);
            }

        } else{
            //número
            //concatenando
            let newValue = this.getLastOperation().toString() + value.toString();
            setLastOperation(parseInt(newValue));
        }
        
    }
    execBtn(value){
        switch(value){

            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('%');
                break;
            case 'multiplicao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
                break;
            //números
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            
            default:
                this.setError();
                break;

        }
    }
    initButtonsEvents(){
        //aqui vai selecionar todos os elementoss que correspondem
        //ao que foi pedido
        let buttons = document.querySelectorAll("#buttons > g, parts > g");

        buttons.forEach((btn, index)=>{
                    //mouseover é quando passamos por cima com o mouse
            this.addEventListenerAll(btn, 'click drag mouseover', e=>{

                let textBtn = btn.className.baseVal.replace("btn-", "");
                
                this.execBtn(textBtn);
         });
         // quando o mouse passar por cima, vira "maozinha"
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";
            })
        })

     
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