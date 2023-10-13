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