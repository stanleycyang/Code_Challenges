function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\)\s{1}\d{3}-{1}\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber("(098) 123 4567"));
