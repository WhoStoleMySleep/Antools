import './Button.scss'

const Button = (props: { mod?: string, padding: string, text: string }) => {  
  const { mod, padding, text } = props

  return (
    <button
      style={{ 'padding': `${padding}` }}
      className={`button${mod ? ' button_' + mod : ''}`}
    >
      {text}
    </button>
  );
}

export default Button;
