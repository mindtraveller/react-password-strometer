import zxcvbn from 'zxcvbn'

const ctx = self

ctx.addEventListener('message', (event) => {
  const password = event.data

  const passwordInfo = password ? zxcvbn(password) : null

  ctx.postMessage(passwordInfo)
})
