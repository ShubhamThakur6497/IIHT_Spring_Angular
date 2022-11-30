var name ='Train'
        var weeks =6

        console.log(name);
        console.log(weeks);

        function alertUser(){

           // alert('get alert !!');

        }

        alertUser();

        let name2='testing after alert'
        console.log(name2);

        function operators(num){

            if(num >= 20){console.log('greater than 20');}
            else if (num === 20){console.log('equal to 20');}
            else{console.log('smaller than 20');}



        }

        operators(25);


        // switch case example

        function creditscore(score){
            var creditlimit;

            switch(score){
                case 800 : creditlimit ='Above 1 lakh';
                break;
                case 700 : creditlimit ="50,000 to 1lkh";
                break;
                default: creditlimit="not eligible";
            
            }

            console.log(creditlimit);

        }


        creditscore(700);


        // Loop

        function loopTry(){

            for(let i=0;i<=10;i++){ console.log(i);}


        }

        loopTry();

        //objects in JS

        let car= new Object();
        car.model='Xz+'
        car.brand='Tata'
        car.price=2000000
        car.rating='5'

        console.log(car.brand+ ' ' + car.model +' '+car.price + ' '+ car.rating);


        class carDemo{

            constructor(brand,model,price){
                this.brand=brand;
                this.model=model;
                this.price=price;
                
            }
            print(){
                console.log('the brand is :' + c1.brand + 'with price : ' + c1.price + 'and model' + c1.model);
            }

        }

        let c1=new carDemo('BMW',9000000,'XZ+');
        c1.print();
     


        class todaysDate extends Date{

            constructor(){
                super();
            }

            printDate(){
                console.log(this.getDate());
            }

        }

        let today = new todaysDate();
        today.printDate();


        //inheritacne

        class Apple{

            constructor(brand){
                this.brand='Apple';
            }


        }

        class macbook extends Apple{

            constructor(model, processor , ram){
                super();
                this.model=model;
                this.processor=processor;
                this.ram=ram;
        }

        }

        let l1=new macbook('15` inch 2022 edition' , 'macbook pro' , 16)
        console.log(l1.brand+' ' + l1.model+' ' + l1.processor + ' '+ l1.ram)

        //arrow functions

        let counting1 = () => {

        for(let i=0;i<=10;i++){
             console.log(i);
            }

        }

        counting1();

