const formData = {
    email: "",
    message: ""
}

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

const saveFormData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormData();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, message } = formData;
    if (!email || !message) {
        alert("Fill please all fields");
        return;
    }
    console.log("Form submitted:", formData);

    localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});

loadFormData();