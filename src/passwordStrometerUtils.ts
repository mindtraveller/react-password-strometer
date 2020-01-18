import Worker from 'worker-loader!./passwordStrometer.worker';

const worker = new Worker();

const handlers: Array<(result?: zxcvbn.ZXCVBNResult) => void> = [];

interface ResponseEvent {
  data?: zxcvbn.ZXCVBNResult
}

function handleResponse(event: ResponseEvent) {
  const [handler] = handlers.splice(0, 1);
  handler && handler(event.data);
}

worker.addEventListener('message', handleResponse);

function calculatePasswordInfo(password: string) {
  return new Promise(resolve => {
    handlers.push(resolve);
    worker.postMessage(password);
  });
}

export {
  calculatePasswordInfo,
};