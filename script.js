// script.js
function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const lengthFeedback = document.getElementById("length-feedback");
    const complexityFeedback = document.getElementById("complexity-feedback");
    const uniquenessFeedback = document.getElementById("uniqueness-feedback");
    const overallFeedback = document.getElementById("overall-feedback");
    const strengthBar = document.getElementById("strength-bar");

    // Check Length
    const length = password.length;
    let lengthStrength = '';
    if (length < 6) {
        lengthStrength = 'Too Short';
    } else if (length >= 6 && length <= 8) {
        lengthStrength = 'Medium Length';
    } else {
        lengthStrength = 'Good Length';
    }

    // Check Complexity
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigits = /\

    let complexityStrength = '';
    if (hasLowercase && hasUppercase && hasDigits && hasSpecial) {
        complexityStrength = 'Strong Complexity';
    } else if (hasLowercase && hasUppercase && (hasDigits || hasSpecial)) {
        complexityStrength = 'Medium Complexity';
    } else {
        complexityStrength = 'Weak Complexity';
    }d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check Uniqueness (basic check for common patterns like "123456", "password")
    const commonPasswords = ['123456', 'password', '123456789', 'qwerty', 'abc123'];
    let uniquenessStrength = 'Unique';
    for (let i = 0; i < commonPasswords.length; i++) {
        if (password.toLowerCase().includes(commonPasswords[i])) {
            uniquenessStrength = 'Common Password (Avoid)';
            break;
        }
    }

    // Calculate Overall Strength (Score based on criteria)
    let overallStrength = '';
    if (length >= 8 && complexityStrength === 'Strong Complexity' && uniquenessStrength === 'Unique') {
        overallStrength = 'Very Strong';
        strengthBar.style.width = '100%';
        strengthBar.className = 'strong';
    } else if (length >= 6 && complexityStrength !== 'Weak Complexity') {
        overallStrength = 'Medium Strength';
        strengthBar.style.width = '60%';
        strengthBar.className = 'medium';
    } else {
        overallStrength = 'Weak';
        strengthBar.style.width = '30%';
        strengthBar.className = 'weak';
    }

    // Display Feedback
    lengthFeedback.textContent = `Length: ${lengthStrength}`;
    complexityFeedback.textContent = `Complexity: ${complexityStrength}`;
    uniquenessFeedback.textContent = `Uniqueness: ${uniquenessStrength}`;
    overallFeedback.textContent = `Overall Strength: ${overallStrength}`;
}
