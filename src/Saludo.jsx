const Saludo = ({ title, text, footer }) => {


  const handleSaludo = () => {
    console.log(`Estas saludando al Saludo ${title}`)
    console.log(text)
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      {/* <p>{footer}</p> */}
      <button onClick={handleSaludo}>Saludar</button> 
      <p>asdasdasda</p>
    </div>
  )
}

export default Saludo;