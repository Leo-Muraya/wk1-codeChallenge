function studentGradeGenerator(grade){
    if (grade >79 && grade <=100){
        console.log ("A")
    } else if (grade >59 && grade <=79){
        console.log ("B")
    } else if (grade >50 && grade <=59){
        console.log ("C")
    } else if (grade >=40 && grade <=49){
        console.log ("D")
    } else if (grade <40){
        console.log("E")
    }
}

studentGradeGenerator(10);
//input grade between 0-100 in the brackets