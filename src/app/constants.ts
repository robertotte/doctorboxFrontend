import swal from 'sweetalert2';

export class swalMessages {

    commonErrors = {
        internalErrorMsg: 'Server under maintenance, sorry for inconvenience.',
        internalErrorTitle: 'Internal Server Error'
    }

    formErrors = {
        invalidFormMsg: 'Please enter required form fields.',
        invalidFormTitle: 'Invalid form'
    }

    loginAuth = {
        inalidUser401: 'inalid user',
        accountNotActive400: 'account not active',
        invalidusernameorpassword404: 'invalid user name or password'
    }

    loginStatus = {
        success: 'Welcome to Doctor Box',
        invalid: 'Username or password is invalid'
    }

    signupStatus = {
        activationMailMsg: 'Please check your email for account activation instructions.',
        activationMailTitle: 'Activation mail sent',

        userOrEmailExistMsg: 'Username or email already exist',
        userOrEmailExistTitle: 'Already exist',

        passwordTitle: 'Password pattren',
        passwordMsg: 'Password must be at least 8 characters long, have at least one number, one special character and one upper case character.',
    }

    emailVerify = {
        unverifiedEmailMsg: 'Please first verify your email address to login.',
        unverifiedEmailTitle: 'Unverified Email',

        unregisteredEmailMsg: 'Please first register your email address to login.',
        unregisteredEmailTitle: 'Unregistered Email'
    }

    forgotPassword = {
        invalidEmailTitle: 'User does not exist',
        invalidEmailMsg: 'Please enter a registered email address.',

        accountNotActiveTitle: 'Account not active',
        accountNotActiveMsg: 'Please check your registed email address for account activation.',

        accountActiveTitle: 'Password reset mail sent',
        accountActiveMsg: 'Please check your registed email address for password reset instructions.'
    }

    accountActivation = {
        accountVerified: 'Your account is verified!',
        InvalidAccount: 'No account found!',
        accountAlreadyVerified: 'Your account has already been activated!'
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

export const apiHeader = 'https://doctor-box.herokuapp.com/';