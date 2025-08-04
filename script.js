function togglePassword() {
            const passwordField = document.getElementById('password');
            const confirmPasswordField = document.getElementById('confirmpassword');
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;
            confirmPasswordField.type = type;
        }

        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        function isNumeric(value) {
            return !isNaN(value);
        }

        function isValidPhoneNumber(value) {
            return value.length === 10 && isNumeric(value);
        }

        function isValidPassword(password) {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            return regex.test(password);
        }

        $("#submitbutton").click(function() {
            var errormessage = "";
            var missingfield = "";

            // Clear previous messages
            $("#errors").hide().html("");
            $("#success").hide().html("");

            if ($("#Email").val() == "") {
                missingfield += "<p>Email is required.</p>";
            } else if (!isEmail($("#Email").val())) {
                errormessage += "<p>Please enter a valid email address.</p>";
            }
            
            if ($("#phoneno").val() == "") {
                missingfield += "<p>Phone number is required.</p>";
            } else if (!isValidPhoneNumber($("#phoneno").val())) {
                errormessage += "<p>Phone number must be exactly 10 digits.</p>";
            }

            if ($("#password").val() == "") {
                missingfield += "<p>Password is required.</p>";
            } else if (!isValidPassword($("#password").val())) {
                errormessage += "<p>Password must be at least 8 characters long with one uppercase, one lowercase, and one number.</p>";
            }

            if ($("#password").val() !== $("#confirmpassword").val()) {
                errormessage += "<p>Passwords do not match.</p>";
            }

            if (errormessage === "" && missingfield === "") {
                $("#success").html("You are successfully registered.").show();
            } else {
                $("#errors").html(errormessage + missingfield).show();
            }
        });