import React from 'react';
import zxcvbn from 'zxcvbn'
import { calculatePasswordInfo } from './passwordStrometerUtils';

export type PasswordInfo = zxcvbn.ZXCVBNResult | null

export interface PasswordStrometerProps {
  password: string,
  children: (args: { passwordInfo: PasswordInfo }) => React.ReactNode
}

function PasswordStrometer(props: PasswordStrometerProps) {
  const [info, setInfo] = React.useState<PasswordInfo>(null);

  React.useEffect(
    () => {
      calculatePasswordInfo(props.password)
        .then(setInfo);
    },
    [props.password],
  );

  return (
    props.children({ passwordInfo: info })
  );
}

PasswordStrometer.displayName = 'PasswordStrometer';

export default PasswordStrometer;
