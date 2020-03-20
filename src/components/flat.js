import React from 'react'


const Flat = (props) => {
  // TODO: return de card component
  let isActive = null
  if (props.selected !== null) {
    if (props.selected.name === props.name) {
      isActive = 'active'
    }
  }

  const style = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props.imageUrl})`}
  return(
    <div className={`card ${isActive}`} style={style} onClick={e => props.handleClick(props.center, props.name)}>
      <div className="card-category">{props.price} EUR</div>
      <div className="card-description">
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Flat
