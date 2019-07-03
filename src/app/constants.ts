import swal from 'sweetalert2';

export class swalMessages {

    commonErrors = {
        internalErrorMsg500: 'Server under maintenance, sorry for inconvenience.',
        internalErrorTitle500: 'Internal Server Error'
    }

    formErrors = {
        invalidFormMsg: 'Please enter required form fields.',
        invalidFormTitle: 'Invalid form'
    }

    loginAuth = {
        invalidUser401: 'Please first register your email address to login.',
        accountNotActive400: 'Please first verify your email address to login.',
        invalidusernameorpassword404: 'invalid user name or password'
    }

    loginStatus = {
        success200: 'Welcome to MedBox',
        invalid400: 'Username or password is invalid'
    }

    signupStatus = {
        activationMailMsg200: 'Please check your email for account activation instructions.',
        activationMailTitle200: 'Activation mail sent',

        userOrEmailExistMsg404: 'Username or email already exist',
        userOrEmailExistTitle404: 'Already exist',

        passwordTitle400: 'Password pattren',
        passwordMsg400: 'Password must be at least 8 characters long, have at least one number, one special character and one upper case character.',
    }

    emailVerify = {
        unverifiedEmailMsg: 'Please first verify your email address to login.',
        unverifiedEmailTitle: 'Unverified Email',

        unregisteredEmailMsg: 'Please first register your email address to login.',
        unregisteredEmailTitle: 'Unregistered Email'
    }

    forgotPassword = {
        invalidEmailTitle404: 'User does not exist',
        invalidEmailMsg404: 'Please enter a registered email address.',

        accountNotActiveTitle400: 'Account not active',
        accountNotActiveMsg400: 'Please check your registed email address for account activation.',

        accountActiveTitle200: 'Password reset mail sent',
        accountActiveMsg200: 'Please check your registed email address for password reset instructions.'
    }

    accountActivation = {
        accountVerified200: 'Your account is verified!',
        InvalidAccount400: 'No account found!',
        accountAlreadyVerified404: 'Your account has already been activated!'
    }

    logout = {
        Title: 'DoctorBox',
        Msg: 'Thanks for visiting us'
    }

    successAlert(title, text) {
        swal.fire({
            type: 'success',
            title: title,
            text: text,
            showConfirmButton: true,
            showCancelButton: false,
        });
    }

    errorAlert(title, text) {
        swal.fire({
            type: 'error',
            title: title,
            text: text,
            showConfirmButton: true,
            showCancelButton: false
        });
    }

    warningAlert(title, text) {
        swal.fire({
            type: 'warning',
            title: title,
            text: text,
            showConfirmButton: true,
            showCancelButton: false
        });
    }
}

export const apiHeader = 'https://apis-medboxx.herokuapp.com/';