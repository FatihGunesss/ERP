import "./style.scss"




const Button = ({className, title, style}) => {
    return (
      <div className='btn-wrapper'>
          <button className={className} style={style}>
              {title}
          </button>
      </div>
    )
  }

export default Button