let speech = new SpeechSynthesisUtterance();


let voices =[];
let voiceselect = document.querySelector("select")


window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


voices.forEach((voice , i) => (voiceselect.options[i] = new Option(voice.name , i)
))
};



const btn = document.querySelector("button")
const textarea = document.querySelector("textarea")

btn.addEventListener("click" , () =>{

    speech.text = textarea.value //set the text that you want to spoken
    window.speechSynthesis.speak(speech)  //speak the speech

})