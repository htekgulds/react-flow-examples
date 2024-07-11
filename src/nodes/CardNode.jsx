import { Handle, Position } from '@xyflow/react'

function CardNode (props) {
  console.log(props)

  return (
    <div className='card card-bordered bg-base-100 w-48 card-compact'>
      <div className='card-body'>
        <h2 className='card-title'>
          {props.data.title}
        </h2>
        <p>{props.data.description}</p>
      </div>
      <Handle type='source' position={Position.Right} />
    </div>
  )
}

export default CardNode
