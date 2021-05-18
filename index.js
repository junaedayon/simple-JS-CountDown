


const countDown = () => {
    let futerDate = new Date("May 28, 2021 ")
    let currentDate = new Date();
    let remainingDate = (futerDate - currentDate) / 1000
    

    let day = Math.floor((remainingDate / 3600 / 24 ))

    let hours =Math.floor((remainingDate / 3600) % 24)

    let mins = Math.floor ((remainingDate / 60) % 6)

    let secs = Math.floor((remainingDate ) % 60)

    console.log(day , hours , mins ,secs)


    document.getElementById('days').innerHTML = day;
    document.getElementById("hour").innerHTML = hours
    document.getElementById("min").innerHTML = mins
    document.getElementById("sec").innerHTML = secs


    
}

setInterval(countDown , 1000);

countDown();

