import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase.js"

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password =signupForm['signup-password'].value

    console.log(email,password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

            Toastify({
                text: "Welcome",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "botton", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: 'green',
                },
                onClick: function(){} // Callback after click
            }).showToast();


     } catch (error) {        
        if (error.code === 'auth/email-already-in-use'){
            alert ('Email already in use')
        } else if (error.code === 'auth/invalid-email') {
            alert('Invalid email')
        } else if (error.code === 'auth/weak-password') {
            alert ('password is too weak')
        } else if (error.code) {
            alert ('Something went wrong')
        }

    }


})