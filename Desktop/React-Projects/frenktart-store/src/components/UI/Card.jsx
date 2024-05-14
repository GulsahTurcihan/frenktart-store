
const Card = (props) => {
  return (
    <li className="items-center shadow-sm shadow-slate-200 rounded-s mb-4 bg-white">{props.children}</li>
  )
}

export default Card