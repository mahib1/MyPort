function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const typeWriter = async (sentenceArr, id) => {
  const element = document.getElementById(id); 
  const len = sentenceArr.length; 
  const speed = 1000; 

  while(true) {
    for(const sentence of sentenceArr) {
      const newLen = sentence.length;
      for (const character of sentence) {
        await delay(speed / newLen); // Wait for the delay
        element.innerHTML += character; // Append character to the element
      }

      await delay(1000);

      for (const character of sentence) {
        await delay(speed / newLen); // Wait for the delay
        element.innerHTML = element.innerHTML.slice(0, -1); // Remove the last character
      }

      await delay(1000); 
    }
  }
}

document.addEventListener('DOMContentLoaded' , () => {
  const sentences = ["Hello world!" , "I am MAHIB...", "cd ./myPortfolio", "echo $SKILLS" , "python" , "rust " , "C++" , "javaScript"]; 
  typeWriter(sentences , "typeWriter"); 
}); 

document.addEventListener('DOMContentLoaded' , async () => {
  const cursor = document.getElementById("cursor"); 

  while(true) {
    cursor.style.opacity = 0.0; 
    await delay(800); 
    cursor.style.opacity = 1; 
    await delay(800); 
  }
}); 
