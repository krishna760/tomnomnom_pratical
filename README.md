This project demonstrates a DOM-based postMessage vulnerability using a simple HTML interface and an interaction with a known insecure endpoint hosted on Google's Public Firing Range.

## Components:  
Main HTML Page (index.html)  
When clicked on clickme button, it dynamically loads an insecure iframe and sends a postMessage to it containing a JavaScript payload.
The JavaScript file postmessageBug.js contains the onClickEvent() function that handles this logic.

## Target Iframe (External):  
Loads the vulnerable page: https://public-firing-range.appspot.com/dom/toxicdom/postMessage/complexMessageDocumentWriteEval
Listens for postMessage events and executes the provided payload using eval() — which allows for remote code execution via the postMessage API.

Security Focus:  
This demonstrates how insecure use of postMessage and eval in the target iframe can lead to JavaScript execution in the context of that origin (document.domain alert).

Ideal for security learning, especially around DOM XSS, postMessage misuse, and browser-based attack surfaces.

