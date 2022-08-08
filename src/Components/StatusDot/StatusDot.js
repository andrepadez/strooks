const StatusDot = ({ type, scale = 1 }) => {
  return (
    <span className="badge badge-dot">
      <i style={{ transform: `scale(${scale})` }} className={`bg-${type}`}></i>
    </span>
  )
}

export default StatusDot
