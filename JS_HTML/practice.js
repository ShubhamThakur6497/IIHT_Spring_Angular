class Company{

    constructor(cmpName){
        this.cmpName='Cognizant';
    }


}

class developers extends Company{

    constructor(empName,position,joiningDate,location,empId,salary,email){

        super();
        this.department='Developers';
        this.email=email;
        this.empName=empName;
        this.position=position;
        this.joiningDate=joiningDate;
        this.location=location;
        this.empID=empId;
        this.salary=salary;


    }


}

class hr extends Company{

    constructor(empName,position,joiningDate,location,empId,salary,email){

        super();
        this.department='HR';
        this.email=email;
        this.empName=empName;
        this.position=position;
        this.joiningDate=joiningDate;
        this.location=location;
        this.empID=empId;
        this.salary=salary;
        

    }


}

class finance extends Company{

    constructor(empName,position,joiningDate,location,empId,salary,email){

        super();
        this.department='finance';
        this.email=email;
        this.empName=empName;
        this.position=position;
        this.joiningDate=joiningDate;
        this.location=location;
        this.empID=empId;
        this.salary=salary;
        

    }


}

class sales extends Company{

    constructor(empName,position,joiningDate,location,empId,salary,email){

        super();
        this.department='sales';
        this.email=email;
        this.empName=empName;
        this.position=position;
        this.joiningDate=joiningDate;
        this.location=location;
        this.empID=empId;
        this.salary=salary;
        

    }


}

class marketing extends Company{

    constructor(empName,position,joiningDate,location,empId,salary,email){

        super();
        this.department='marketing';
        this.email=email;
        this.empName=empName;
        this.position=position;
        this.joiningDate=joiningDate;
        this.location=location;
        this.empID=empId;
        this.salary=salary;
        

    }


}

class qa extends Company{

    constructor(empName,position,joiningDate,location,empId,salary,email){

        super();
        this.department='qa';
        this.email=email;
        this.empName=empName;
        this.position=position;
        this.joiningDate=joiningDate;
        this.location=location;
        this.empID=empId;
        this.salary=salary;
        

    }


}

let dev1=new developers('DeveloperName' , 'System Engineer' , '11th Nov 2022' , 'Bangalore' , '123456789' , '1000000' , 'developerEmail' );
console.log(dev1.cmpName + "   " +dev1.department + "  " +dev1.empName + " " + dev1.position + " " + dev1.joiningDate+ " " + dev1.location+ " " + dev1.empID+ " " + dev1.salary+ " " + dev1.email )


let hr1=new hr('hrName' , 'Human resource' , '11th Nov 2022' , 'Bangalore' , '123456789' , '1000000' , 'hrEmail' );
console.log(hr1.cmpName + "   " +hr1.department + "  " +hr1.empName + " " + hr1.position + " " + hr1.joiningDate+ " " + hr1.location+ " " + hr1.empID+ " " + hr1.salary+ " " + hr1.email )

let finance1=new finance('FinanceName' , 'Payroll' , '11th Nov 2022' , 'Bangalore' , '123456789' , '1000000' , 'FinanceEmail' );
console.log(finance1.cmpName + "   " +finance1.department + "  " +finance1.empName + " " +
finance1.position + " " + finance1.joiningDate+ " " + finance1.location+ " " + finance1.empID+ " " + 
finance1.salary+ " " + finance1.email );

let sales1=new sales('SalesName' , 'product manager' , '11th Nov 2022' , 'Bangalore' , '123456789' , '1000000' , 'SalesEmail' );
console.log(sales1.cmpName + "   " +sales1.department + "  " +sales1.empName + " " +
sales1.position + " " + sales1.joiningDate+ " " + sales1.location+ " " + sales1.empID+ " " + 
sales1.salary+ " " + sales1.email );

let marketing1=new sales('MktName' , 'Lead' , '11th Nov 2022' , 'Bangalore' , '123456789' , '1000000' , 'MarketingEmail' );
console.log(marketing1.cmpName + "   " +marketing1.department + "  " +marketing1.empName + " " +
marketing1.position + " " + marketing1.joiningDate+ " " + marketing1.location+ " " + marketing1.empID+ " " + 
marketing1.salary+ " " + marketing1.email );

let qa1=new sales('QAName' , 'Lead' , '11th Nov 2022' , 'Bangalore' , '123456789' , '1000000' , 'QAEmail' );
console.log(qa1.cmpName + "   " +qa1.department + "  " +qa1.empName + " " +
qa1.position + " " + qa1.joiningDate+ " " + qa1.location+ " " + qa1.empID+ " " + 
qa1.salary+ " " + qa1.email );