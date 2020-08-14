function validation() {

    let first = document.getElementById('first-name').value;
    let last = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let check = document.getElementById('agree-terms');


    check.addEventListener('click', function() {

        check.classList.add('checked');

        // check.addEventListener('click', function() {
        //     check.classList.remove('checked');

        // });
        
    });

    FIRST();
    LAST();
    PASSWORD();
    EMAIL();
    checkBox();


    function FIRST() {
        let correct = /^[A-Za-z0-9]+$/;


       if (first === "") {
        document.querySelector('.first-error').innerHTML = "** This field cannot be empty";
        document.querySelector('#first-name').style.border = "1px solid red";
        document.querySelector('#first-name').style.background = "rgb(233, 181, 181)";
        return false;

       } else if (first.length < 4 || first.length > 20) {
        document.querySelector('.first-error').innerHTML = "** Character limit is between 4 to 20 !";
        document.querySelector('#first-name').style.border = "1px solid red";
        document.querySelector('#first-name').style.background = "rgb(233, 181, 181)";
      
        return false;
        }  else if (!first.match(correct)) {

            document.querySelector('.first-error').innerHTML = "** no special characters allowed!";
            document.querySelector('#first-name').style.border = "1px solid red";
            document.querySelector('#first-name').style.background = "rgb(233, 181, 181)";
            return false;

        } else {

        document.querySelector('.first-error').innerHTML = "";
        document.querySelector('#first-name').style.border = "1px solid green";
        document.querySelector('#first-name').style.background = "rgb(171, 241, 171)";
        return true;
        
       }
       
    } 


    function LAST() {
        let correct = /^[A-Za-z0-9]+$/;


        if (last === "") {
            document.querySelector('.last-error').innerHTML = "** This field can not be empty";
            document.querySelector('#last-name').style.border = "1px solid red";
            document.querySelector('#last-name').style.background = "rgb(233, 181, 181)";
          
            return false;
        } else if (last.length < 4 || last.length > 20) {
            document.querySelector('.last-error').innerHTML = "** Character limit is between 4 to 20 !";
            document.querySelector('#last-name').style.border = "1px solid red";
            document.querySelector('#last-name').style.background = "rgb(233, 181, 181)";
          
            return false;
        } else if (!last.match(correct)) {
            document.querySelector('.last-error').innerHTML = "** No Special Character allowed!";
            document.querySelector('#last-name').style.border = "1px solid red";
            document.querySelector('#last-name').style.background = "rgb(233, 181, 181)";
          
        } else{

            document.querySelector('.last-error').innerHTML = "";
            document.querySelector('#last-name').style.border = "1px solid green";
            document.querySelector('#last-name').style.background = "rgb(171, 241, 171)";
            return true;
        }
    }

   
    function PASSWORD() {
        if (password == "") {
            document.querySelector('.pass-error').innerHTML = "** This field can not be empty";
            document.querySelector('#password').style.border = "1px solid red";
            document.querySelector('#password').style.background = "rgb(233, 181, 181)";
          
            return false;
        } else if (password.length < 8) {
            document.querySelector('.pass-error').innerHTML = "** Atleast 8 characters required";
            document.querySelector('#password').style.border = "1px solid red";
            document.querySelector('#password').style.background = "rgb(233, 181, 181)";
            return false;

        } else {

            document.querySelector('.pass-error').innerHTML = "";
            document.querySelector('#password').style.border = "1px solid green";
            document.querySelector('#password').style.background = "rgb(171, 241, 171)";
            return true;
        }
    
    }

    function EMAIL() {

        // let emailCorrect = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+).([a-zA-Z]{2,6})?$/;
        let emailCorrect = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
         if (emailCorrect.test(email)) {
            
            document.querySelector('.email-error').innerHTML = "";
            document.querySelector('#email').style.border = "1px solid green";
            document.querySelector('#email').style.background = "rgb(171, 241, 171)";
            return true; 
            
         } else {
            document.querySelector('.email-error').innerHTML = "** Invalid Email!";
            document.querySelector('#email').style.border = "1px solid red";
            document.querySelector('#email').style.background = "rgb(233, 181, 181)";
          
            return false;
         }  
         
        //   if (email === "") {
        //       document.querySelector('.email-error').innerHTML = "** This field cannot be empty";
        //       document.querySelector('#email').style.border = "1px solid red";
        //       document.querySelector('#email').style.background = "rgb(233, 181, 181)";
            
        //       return false;
          
        //   } else {
        //     document.querySelector('.email-error').innerHTML = "";
        //     document.querySelector('#email').style.border = "1px solid green";
        //     document.querySelector('#email').style.background = "rgb(171, 241, 171)";
        //     return true;
             
        //  }
    }


    function checkBox() {

        if (check.classList.contains("checked")) {
            
            return true;
        } else {
    
            return false;
        }

    }

    
    if((FIRST() && LAST() && PASSWORD() && EMAIL() &&checkBox()) == true ) {
     
        alert('Your Apllication has been received.');

        return true;
    } else {
     
        alert('Please fill Out the form correctly!');
        return false;
    }
}
    
