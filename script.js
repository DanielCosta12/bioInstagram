function mode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    let text = document.querySelector('button');
    text.textContent = text.textContent === "🌞" ? "🌚" : "🌞";
}