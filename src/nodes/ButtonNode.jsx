import { Handle, Position } from '@xyflow/react'

function ButtonNode (props) {
  console.log(props)

  return (
    <button className='btn btn-ghost btn-circle btn-outline border-dashed'>
      <Handle type='target' position={Position.Left} />
      +
    </button>
  )
}

export default ButtonNode
