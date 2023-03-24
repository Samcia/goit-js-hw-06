/* Napisz skrypt zarządzania formularzem logowania.
1.Funkcjonalność przesyłania formularza form.login-form powinna
 zostać obsłużona przy użyciu wydarzenia submit
2.Podczas przesyłania formularza strona nie powinna się odświeżać.
3.Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, 
że wszystkie pola powinny zostać wypełnione.
4.Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz,
 pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, 
 a wartość pola - wartością właściwości. 
 Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
5.Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.*/

const form = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
};

form.addEventListener("submit", submitHandler);
