

const Children = ({children, MyValue}) => {
  return (
    <div>
        <h2>Este e o titulo do container</h2>
        {children}
        <p>meu valor é: {MyValue}</p>
    </div>
  )
}

export default Children