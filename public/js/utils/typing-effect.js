export function typingEffect (typedElement, textToType, callbackAnimation){
    let charIndex = 0;
    let typingSpeed = 60;
    function typeText() {
        if (charIndex == textToType.length) {
            callbackAnimation(typedElement);
        }
        if (charIndex < textToType.length) {
            typedElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            console.log('Comenzando a escribir ' + textToType.charAt(charIndex));
            setTimeout(typeText, typingSpeed);
        }
    }
    if (typedElement) {
        typedElement.textContent = '';
        typeText();
    }
};