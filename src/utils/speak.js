const textToSpeech = (text) => {
  if (typeof text !== 'string') {
    console.log('the argumet of textToSpeech must be a type of string!')

    return;
  }

  window.speechSynthesis.speak(
    new SpeechSynthesisUtterance(text),
  );
}

export default textToSpeech;
