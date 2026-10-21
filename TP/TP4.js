function calculateTotalTime() {
   
    let h1 = Number(document.getElementById('h1').value) || 0;
    let m1 = Number(document.getElementById('m1').value) || 0;
    let s1 = Number(document.getElementById('s1').value) || 0;

    let h2 = Number(document.getElementById('h2').value) || 0;
    let m2 = Number(document.getElementById('m2').value) || 0;
    let s2 = Number(document.getElementById('s2').value) || 0;

    let h3 = Number(document.getElementById('h3').value) || 0;
    let m3 = Number(document.getElementById('m3').value) || 0;
    let s3 = Number(document.getElementById('s3').value) || 0;

    let totalSeconds = s1 + s2 + s3;
    let totalMinutes = m1 + m2 + m3;
    let totalHours = h1 + h2 + h3;



    let extraMinutes = Math.floor(totalSeconds / 60); //60sec -> 1min
    let finalSeconds = totalSeconds % 60; //rest

    totalMinutes += extraMinutes;

    let extraHours = Math.floor(totalMinutes / 60); //60min -> 1h
    let finalMinutes = totalMinutes % 60; //rest

    totalHours += extraHours;

    let finalDays = Math.floor(totalHours / 24); //24h -> 1d
    let finalHours = totalHours % 24; //rest

    document.getElementById('totalResult').innerText = 
    `Total des trois temps : Jour(s): ${finalDays} | Heure(s): ${finalHours} | Minute(s): ${finalMinutes} | Seconde(s): ${finalSeconds}`;
}

function resetTimeForm() {
    document.getElementById('h1').value = 0;
    document.getElementById('m1').value = 0;
    document.getElementById('s1').value = 0;

    document.getElementById('h2').value = 0;
    document.getElementById('m2').value = 0;
    document.getElementById('s2').value = 0;

    document.getElementById('h3').value = 0;
    document.getElementById('m3').value = 0;
    document.getElementById('s3').value = 0;

    document.getElementById('totalResult').innerText = "";
}