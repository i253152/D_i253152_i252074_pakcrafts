// =================== CART MESSAGE ===================
document.querySelector(".cart-icon").addEventListener("click", () => {
    alert("Your cart is empty."); // Alert for cart click
    console.log("Cart icon clicked - cart is empty"); // Console log #1
});

// =================== ADD TO CART ===================
document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Item added to cart!"); // Alert #1 for add to cart success
        console.log("Item added to cart:", btn.parentElement.querySelector("h4").innerText); // Console log #2
        btn.style.background = "#A97847";
        setTimeout(() => btn.style.background = "#C18A52", 300);
    });
});

// =================== SHOP NOW REDIRECT ===================
document.querySelector(".shop-btn").addEventListener("click", () => {
    window.location.href = "products.html";
    console.log("Shop Now button clicked - Redirecting to products page"); // Console log #3
});

// =================== LOGIN FORM ===================
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    console.log("Login Attempt:", {email: email, password: pass}); // Console log #4 for debugging login input

    if(email === "" || pass === ""){
        alert("Please fill all fields!"); // Alert #2 for empty login fields
    } else {
        alert("Login Successful!"); // Alert #3 for successful login
    }
});

// =================== SIGNUP FORM ===================
document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPassword").value;
    let cpass = document.getElementById("signupCPassword").value;

    console.log("Signup Attempt:", {name, email, pass, cpass}); // Console log #5 for debugging signup input

    if(name === "" || email === "" || pass === "" || cpass === ""){
        alert("Please fill all fields!"); // Alert #4 for empty signup fields
        return;
    }

    if(pass !== cpass){
        alert("Passwords do not match!"); // Alert for password mismatch
        return;
    }

    alert("Signup Successful!"); // Alert #5 for successful signup
});

// =================== CONTACT FORM ===================
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    console.log("Contact Form Submitted:", {name, email, message}); // Console log #6 for debugging contact input

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields!"); // Alert #6 for empty contact fields
        return;
    }

    if(message.length < 10){
        alert("Message must be at least 10 characters!"); // Alert #7 for message too short
        return;
    }

    alert("Thank you! Your message has been sent."); // Alert #8 for successful submission
    this.reset();
});

// =================== PAYMENT FORM ===================
document.getElementById("paymentForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("cardName").value;
    let number = document.getElementById("cardNumber").value;
    let expiry = document.getElementById("cardExpiry").value;
    let cvv = document.getElementById("cardCVV").value;

    console.log("Payment Attempt:", {name, number, expiry, cvv}); // Console log #7 for debugging payment input

    if(name === "" || number === "" || expiry === "" || cvv === ""){
        alert("Please fill all fields!"); // Alert #9 for empty payment fields
        return;
    }

    if(number.length !== 16 || isNaN(number)){
        alert("Please enter a valid 16-digit card number!"); // Alert #10 for invalid card
        return;
    }

    if(cvv.length !== 3 || isNaN(cvv)){
        alert("Please enter a valid 3-digit CVV!"); // Alert #11 for invalid CVV
        return;
    }

    alert("Payment Successful! Thank you for your purchase."); // Alert #12 for success
    this.reset();
});

// =================== Unique Feature ===================
const colorButtons = document.querySelectorAll(".color-btn");
const styleButtons = document.querySelectorAll(".style-btn");
const productImage = document.getElementById("productImage");

let selectedColor = "";
let selectedStyle = "";

// Color selection
colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const imgSrc = btn.getAttribute("data-image");
        productImage.src = imgSrc;
        selectedColor = imgSrc;
        console.log("Product customization selected - Color:", selectedColor); // Console log #8
        // Optional alert for UX
        alert("Color selected!");
    });
});

// Style selection
styleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const imgSrc = btn.getAttribute("data-image");
        productImage.src = imgSrc;
        selectedStyle = btn.innerText;
        console.log("Product customization selected - Style:", selectedStyle); // Console log #9
        // Optional alert for UX
        alert("Style selected!");
    });
});
