document.addEventListener('DOMContentLoaded', () => {

  const sentenceTag = document.querySelector(`input[type="text"]`)
  const outputTag = document.querySelector('textarea.output')
  const ogText = outputTag.value

  const typesizeTag = document.querySelector(`input[name="typesize"]`)
  const typesizeOutput = document.querySelector('span.typesize-output') 

  //change the display sentence 
  sentenceTag.addEventListener('keyup', function() {
    (this.value ? outputTag.value = this.value : outputTag.value = ogText) 
  })

  outputTag.addEventListener('keyup', function() {
    sentenceTag.value = this.value
  })

  // change the type size 
  typesizeTag.addEventListener('input', (e) => {
    outputTag.style.fontSize = e.target.value + 'px'
    typesizeOutput.innerHTML = e.target.value + 'px'
  })

})
