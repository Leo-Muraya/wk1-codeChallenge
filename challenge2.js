function speedDetector(speed){

    let speedLimit = 70

    let demeritPoint = Math.ceil((speed - speedLimit)/5)

    if (speed <=70){
        console.log("Ok");        
    }   else if (speed >70 && speed <130){
        console.log(demeritPoint);
    }   else if (speed >=130){
        console.log("License suspended");
        console.log(demeritPoint);
    }
}

speedDetector();
//input speed in the brackets
