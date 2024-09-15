let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

let appointmentForm = document.getElementById('appointmentForm')
appointmentForm.addEventListener('submit', function(e){

    e.preventDefault()

    // save form
    
    let patientName = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let appointmentDate = document.getElementById('appointmentDate').value;
    let appointmentTime = document.getElementById('appointmentTime').value;
    let appType = document.getElementById('appType').value;
    let isFollowUp = document.getElementById('isFollowUp').value;

    let dentist = document.getElementById('dentist').value;
    // Save form data to local storage
localStorage.setItem('name', patientName);
localStorage.setItem('age', age);
localStorage.setItem('phone', phone);
localStorage.setItem('email', email);
localStorage.setItem('appointmentDate', appointmentDate);
localStorage.setItem('appointmentTime', appointmentTime);
localStorage.setItem('appType', appType);
localStorage.setItem('dentist', dentist);
localStorage.setItem('isFollowUp', isFollowUp);
    
    let currentSlots = {
        "Dr. Emmanuel": ["09:00", "11:00"],
        "Dr. Esther": ["10:00", "13:00"],
        "Dr. Anita": ["12:00", "14:00"]
    };



    let valid = true;
    let aErr = document.getElementById('aErr')
    let bErr = document.getElementById('bErr')
    let cErr = document.getElementById('cErr')
    let dErr = document.getElementById('dErr')
    let eErr = document.getElementById('eErr')
    let fErr = document.getElementById('fErr')
    let gErr = document.getElementById('gErr')
    let hErr = document.getElementById('hErr')
    let iErr = document.getElementById('iErr')



   

    if(patientName === ""){
        aErr.innerHTML =  'field cant be blank cant be left blank'
        valid = false
        console.log(valid)

    }else{
        aErr.innerHTML = ""
    }
    if(age === ""){
        bErr.innerHTML =  '  feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else if (age < 18){

    }
    else{
        bErr.innerHTML = ""
    }if(phone === ""){
        cErr.innerHTML =  '  feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        cErr.innerHTML = ""
    }
    if(email === ""){
        dErr.innerHTML =  ' Email feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else if (!emailRegex.test(email)) {
        dErr.innerHTML = "Please enter a valid email address";
        valid = false;
    }
    else{
        dErr.innerHTML = ""
    }if(appointmentDate === ""){
        eErr.innerHTML =  ' Date feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        eErr.innerHTML = ""
    }if(appointmentTime === ""){
        fErr.innerHTML =  ' Time feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        fErr.innerHTML = ""
    }if(appType === ""){
        gErr.innerHTML =  '  Type feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        gErr.innerHTML = ""
    }if (isFollowUp === ""){

    hErr.innerHTML =  '  Type feild cant be blank cant be left blank'
        valid = false
        console.log(valid)


    }else{
        hErr.innerHTML = ""
    }
    if(dentist === ""){
        iErr.innerHTML =  `Please ${patientName} pick a dentist`
        valid = false
        console.log(valid)


    }else{
        iErr.innerHTML = ""
    }

    if (!valid) {
        console.log("Form not submitted due to validation errors.");
        return;
    } 
    if (!currentSlots[dentist].includes(appointmentTime)) {
      
localStorage.setItem('name', patientName);

        window.location.href = "unavailable.html";
        document.getElementById('appointmentForm').reset();
    }else{
        window.location.href ="available.html";
    document.getElementById('availabilityMessage').textContent = "";
}
    


document.getElementById('appointmentForm').reset();

});

document.getElementById('age').addEventListener('input', function () {
    let age = this.value;
    let minorNotice = document.getElementById('minorNotice');
    minorNotice.textContent = age < 18 ? "This patient is a minor." : "";
});


function toggleMenu() {
    const menu = document.getElementById('ham-menu');
    menu.classList.toggle('active');
}

        function myFunction() {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }
