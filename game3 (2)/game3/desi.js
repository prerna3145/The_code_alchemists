const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


    function navigateToPostLogin() {
        // Replace "post-login.html" with the actual file path if needed
        window.location.href = "file:///C:/Users/ricky/OneDrive/Desktop/HTMLS/option.html";
    }

    // Event listener for the "Sign Up" button
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    // Event listener for the "Sign In" button
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    // Event listener for the "Sign Up" form submission (assuming the form has an ID "signUpForm")
    document.getElementById('signUpForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Your sign-up form processing code here (e.g., validation, AJAX request)

        // After successful sign-up, navigate to the post-login page
        navigateToOption();
    });

    // Event listener for the "Sign In" form submission (assuming the form has an ID "signInForm")
    document.getElementById('signInForm').addEventListener('submit', (event) => {
        event.preventDefault(); 
        navigateToOption();
    });


