function grossPay(basicSalary){
    if (basicSalary <=24000){
        PAYE = basicSalary *0.1
        console.log (basicSalary - PAYE)
    } else if (basicSalary >24000 && basicSalary <=32333){
        PAYE = basicSalary *0.25
        console.log (basicSalary - PAYE)        
    } else if (basicSalary >32333 && basicSalary <=500000){
        PAYE = basicSalary *0.3
        console.log (basicSalary - PAYE)
    } else if (basicSalary >500000 && basicSalary <=800000){
        PAYE = basicSalary *0.325
        console.log (basicSalary - PAYE)
    } else if (basicSalary >800000){
        PAYE = basicSalary *0.35

    }
}

function nhifDeductions(grossPay){
    if (grossPay <6000){
        deduction = 150
        console.log (grossPay - deduction)
    } else if (grossPay >=6000 && grossPay <8000){
        deduction = 300
        console.log (grossPay - deduction)
    } else if (grossPay >=8000 && grossPay <12000){
        deduction = 400
        console.log (grossPay - deduction)
    } else if (grossPay >12000 && grossPay <15000){
        deduction = 500
        console.log (grossPay - deduction)
    } else if (grossPay >=15000 && grossPay <20000){
        deduction = 600
        console.log (grossPay - deduction)
    } else if (grossPay >=20000 && grossPay <25000){
        deduction = 750
        console.log (grossPay - deduction)
    } else if (grossPay >=25000 && grossPay <30000){
        deduction = 850
        console.log (grossPay - deduction)
    } else if (grossPay >=30000 && grossPay <35000){
        deduction = 900
        console.log (grossPay - deduction)
    } else if (grossPay >=35000 && grossPay <40000){
        deduction = 950
        console.log (grossPay - deduction)
    } else if (grossPay >=40000 && grossPay <45000){
        deduction = 1000
        console.log (grossPay - deduction)
    } else if (grossPay >=45000 && grossPay <50000){
        deduction = 1100
        console.log (grossPay - deduction)
    } else if (grossPay >=50000 && grossPay <60000){
        deduction = 1200
        console.log (grossPay - deduction)
    } else if (grossPay >=60000 && grossPay <70000){
        deduction = 1300
        console.log (grossPay - deduction)
    } else if (grossPay >=70000 && grossPay <80000){
        deduction = 1400
        console.log (grossPay - deduction)
    } else if (grossPay >=80000 && grossPay <90000){
        deduction = 1500
        console.log (grossPay - deduction)
    } else if (grossPay >=90000 && grossPay <100000){
        deduction = 1600
        console.log (grossPay - deduction)
    } else if (grossPay >100000){
        deduction = 1700
        console.log (grossPay - deduction)
    } 
}

grossPay(10000);
//input basic salary to get gross pay
nhifDeductions(9000);
//input gross pay to get net salary


