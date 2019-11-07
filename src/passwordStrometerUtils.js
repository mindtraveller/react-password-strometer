import Worker from './passwordStrometer.worker'

const worker = new Worker()

const handlers = []

function handleResponse(event) {
  const [handler] = handlers.splice(0, 1)
  handler && handler(event.data)
}

worker.addEventListener('message', handleResponse)

function calculatePasswordInfo({ password }) {
  return new Promise(resolve => {
    handlers.push(resolve)
    worker.postMessage(password)
  })
}

export {
  calculatePasswordInfo,
}