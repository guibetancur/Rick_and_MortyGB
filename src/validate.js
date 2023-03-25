const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,13}/
// Mínimo 6 caracteres, máximo 13, al menos 1 mayúscula y una minúscula, al menos un dígito, sin espacios, al menos un car. especial
export default function validate (inputs) {
   const errors = {}
   if (!inputs.username) errors.username = 'The user cannot be empty.'
   if (!regexUsername.test(inputs.username)) errors.username = 'The username must be a valid email address.'
   if (!inputs.password) errors.password = 'You must type a password.'
   if (!regexPassword.test(inputs.password)) errors.password = 'Password between 6 and 13 characteres, at least 1 uppercase and 1 lowercase, a digit, without spaces and a special character'

   return errors
}