import { calculatePasswordInfo } from './passwordStrometerUtils'

const propTypes = {
  password: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

function PasswordStrometer(props) {
  const [info, setInfo] = React.useState(null)

  React.useEffect(
    () => {
      calculatePasswordInfo({ password: props.password })
        .then(setInfo)
    },
    [props.password],
  )

  return (
    props.children({ passwordInfo: info })
  )
}

PasswordStrometer.propTypes = propTypes

export default PasswordStrometer