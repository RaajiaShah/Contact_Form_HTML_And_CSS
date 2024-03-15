/******************************************/
/************GLOBAL VARIABLES**************/
/******************************************/

let firstname = document.getElementById("inpf");
let lastname = document.getElementById("inpl");
let email = document.getElementById("email");
let img = document.getElementById("select-img");
let message = document.getElementById("message");
let flag = 1;


/******************************************/
/************ONSUBMIT EVENT*************/
/******************************************/

function ValidateForm() {

    // Displaying an error message 

    if (firstname.value.length <= 2 || lastname.value.length <= 2 || img.value == "" || message.value == "") {

        // console message
        console.log("Form Validation Error!")
        document.getElementById("result").innerHTML = "Error! Please Resend!";

        // alert message
        alert("Please resubmit your form!");

        // Hiding form and displaying an error message box
        document.getElementById("contact-form").style.display = "none";
        document.getElementById("user-data").style.display = "block";

        document.getElementById("user-info-box").innerHTML = "Try again!";

        flag = 0;
    }

    /******************************************/

    // Displaying a success message 

    if (flag) {

        // console message
        console.log("Form Validation Success!")
        document.getElementById("result").innerHTML = "Sent Successfully!";

        // alert message
        alert("mail sent successfully");


        // Hiding form and displaying all the user data 
        document.getElementById("contact-form").style.display = "none";
        document.getElementById("user-data").style.display = "block";


        // Displaying user information 
        document.getElementById("user-info-box").innerHTML = "Your Name: " + document.getElementById("inpf").value + document.getElementById("inpl").value + "<br><br>" + "Your Email Address: " + document.getElementById("email").value + "<br><br>" + "Your Image: " + document.getElementById("select-img").files[0].name + "<br><br>" + "Your Message: " + document.getElementById("message").value + "<br><br>";
    }

}

/******************************************/
/*******DISPLAYING IMAGE BEFORE UPLOAD********/
/******************************************/

function show_img(event) {

    if (event.target.files.length > 0) {


        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("prev-img");
        var displayimg = document.getElementById("display-img");
        preview.src = src;
        preview.style.display = "block";
        displayimg.style.display = "block";
    }

}