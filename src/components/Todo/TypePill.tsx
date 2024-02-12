interface TTypePill {
    type:string,
    color:string,
    hoverColor:string
}
const TypePill = ({type, color, hoverColor}:TTypePill) => {
  return (
    <div className={`${color} cursor-pointer hover:${hoverColor} rounded-3xl px-3 py-1 text-white font-semibold max-sm:text-xs max-sm:w-16 sm:text-sm max-sm: sm:w-20 text-center h-8`}>{type}</div>
  )
}

export default TypePill