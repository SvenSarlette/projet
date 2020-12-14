class Patients {
    constructor (firstName, lastName, gender, dateOfBirth, natRegister, language){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.dateOfBirth = dateOfBirth
        this.natRegister = natRegister
        this.language = language
    }
}

function addPatient(form) {
    let patient = new Patients(form.firstName.value, form.lastName.value, form.gender.value, form.dateOfBirth.value, form.natRegister.vlue, form.language.value);
    return false;
}