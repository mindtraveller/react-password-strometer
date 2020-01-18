import zxcvbn from 'zxcvbn';

const ctx: Worker = self as any;

ctx.addEventListener('message', (event: { data: string }) => {
  const password = event.data;

  const passwordInfo = password ?
    zxcvbn(password) :
    null;

  ctx.postMessage(passwordInfo);
});