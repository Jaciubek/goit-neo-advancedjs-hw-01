// Object for saving form data
let formData = {
    email: '',
    message: '',
  };
  
  // DOM elements
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
  // Key to save in local storage
  const STORAGE_KEY = 'feedback-form-state';
  
  // Function to save data to local storage
  function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
  // Function for loading data from local storage
  function loadFromLocalStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      formData = JSON.parse(savedData);
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  }
  
  // Function for updating form data
  function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
  }
  
  // Form submission processing
  function handleSubmit(event) {
    event.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    console.log('Form Data:', formData);
  
    // Clearing the form and local storage
    form.reset();
    formData = { email: '', message: '' };
    localStorage.removeItem(STORAGE_KEY);
  }
  
  // Listening for the input event on the form
  form.addEventListener('input', handleInput);
  
  // Loading data from local storage on page load
  window.addEventListener('load', loadFromLocalStorage);
  
  // Form submission processing
  form.addEventListener('submit', handleSubmit);