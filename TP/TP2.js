function checkEmail() {
            let email = document.getElementById('emailInput').value;
           
            let atIndex = email.indexOf('@');
            let dotIndex = email.lastIndexOf('.');
            
            if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
                document.getElementById('emailResult').innerHTML = 
                "<span style='color:green;'>Valid Email!</span>";
            } else {
                document.getElementById('emailResult').innerHTML = 
                "<span style='color:red;'>Invalid Email format. Needs '@' and '.'</span>";
            }


        }


