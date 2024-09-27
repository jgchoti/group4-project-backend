const validateEmail = (email) => {
    const pattern = /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,63}$/;
    return pattern.test(email);
};

export default validateEmail;
