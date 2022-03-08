function animatedForm(){ //creating a function
    const arrows = document.querySelectorAll('.fa-arrow-down'); //Declares all the arrow icons
    arrows.forEach(arrow => { //For each arrow it's going to run a function
        //adds an event for when an arrows is clicked on
        arrow.addEventListener('click', () => { 
            const input = arrow.previousElementSibling; //Creates a variable of what is in the input field. Aka what characters were entered by the user
            const parent = arrow.parentElement; // Variable of the parent element of the Icon
            const nextForm = parent.nextElementSibling; //Variable of the next form ie: if on mail will say password

            if(input.type === "text" && validateUser(input)){ //if on user page and it's validated then go to next slide
                nextSlide(parent,nextForm);
            } else if (input.type === 'email' && validateEmail(input)){
                nextSlide(parent,nextForm);
            } else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            //get rid of animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            });
        });
        /* Attempt at making the return key work but there is an issue where thhe return key fires multiple times making it come up as incorrect
        
        document.addEventListener('keypress', function (event){
            if (event.key === 'Enter'){
                const input = arrow.previousElementSibling; //Creates a variable of what is in the input field. Aka what characters were entered by the user
                const parent = arrow.parentElement; // Variable of the parent element of the Icon
                const nextForm = parent.nextElementSibling; //Variable of the next form ie: if on mail will say password

                if(input.type === "text" && validateUser(input)){ //if on user page and it's validated then go to next slide
                    nextSlide(parent,nextForm);
                } else if (input.type === 'email' && validateEmail(input)){
                        nextSlide(parent,nextForm);
                } else if(input.type === 'password' && validateUser(input)){
                        nextSlide(parent, nextForm);
                }else{
                    parent.style.animation = "shake 0.5s ease";
                }
                //get rid of animation
                parent.addEventListener('animationend', () => {
                    parent.style.animation = "";
                });
            }
        });
        */
    });
}

function validateUser(user){
    if(user.value.length < 6){ //Aka if characters is less than 6
        error('rgb(189,87,87'); //calls the error function and passes in a color
        console.log('this ran')
    }else{
        error('rgb(87, 189, 130)');
        return true; //returns true so that the if statement above will run
    }
}

function validateEmail(email){ 
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //variable for the syntax for checking if an email is entered in properly
    if(validation.test(email.value)){ //tests if the email has @ sings and stuff
        error('rgb(87, 189, 130)');
        return true; //returns true so function above can run if it validates properly
    } else{
        error('rgb(189,87,87');
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive'); //Adds the class innactive when the input is sufficient
    parent.classList.remove('active');
    nextForm.classList.add('active');
}



animatedForm(); //Calls a function