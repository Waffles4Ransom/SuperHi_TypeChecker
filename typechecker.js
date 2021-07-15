document.addEventListener('DOMContentLoaded', () => {

  const sentenceTag = document.querySelector(`input[type="text"]`)
  const outputTag = document.querySelector('textarea.output')
  const ogText = outputTag.value

  sentenceTag.addEventListener('keyup', function() {
    (this.value ? outputTag.value = this.value : outputTag.value = ogText) 
  })

  outputTag.addEventListener('keyup', function() {
    sentenceTag.value = this.value
  })


})
