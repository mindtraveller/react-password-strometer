import zxcvbn from 'zxcvbn'

self.addEventListener('message', event => {
  const password = event.data

  const passwordInfo = password ?
    zxcvbn(password) :
    null

  self.postMessage(passwordInfo)
})