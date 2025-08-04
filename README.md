# TuteDude-MERN-Assignment-3
# Form Validation System

This project implements a simple **form validation system** that checks user input for **email**, **phone number**, and **password**. The form also includes features such as **password visibility toggle** with an eye icon and displays **error** and **success** messages dynamically.

## Features
1. **Email Validation**: 
   - Checks if the email entered by the user is in the correct format (e.g., user@example.com).
   
2. **Phone Number Validation**: 
   - Ensures that the phone number is exactly 10 digits long.

3. **Password Validation**: 
   - Enforces a strong password policy:
     - Minimum 8 characters.
     - At least one uppercase letter.
     - At least one lowercase letter.
     - At least one numeric character.

4. **Confirm Password Validation**: 
   - Ensures that the "Password" and "Confirm Password" fields match.

5. **Eye Icon for Password Visibility**:
   - A small eye icon next to the password fields toggles the visibility of the entered password.

6. **Dynamic Error and Success Messages**:
   - Error messages are displayed in **red** with concise descriptions of the issues.
   - Success messages are shown in **green** once the form is successfully validated.
