import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './App.css'
import { initialEdges } from './edges'
import { initialNodes, nodeTypes } from './nodes'

function App () {
  const [nodes] = useNodesState(initialNodes)
  const [edges] = useEdgesState(initialEdges)

  return (
    <div className='w-full h-screen bg-gray-200 flex flex-row'>
      <div className='w-1/4 min-w-96 h-full flex flex-col border-r border-gray-300 bg-white'>
        <h1 className='text-3xl font-bold px-8 py-4 mb-2'>React Flow Example</h1>
      </div>
      <div className='w-full h-full flex-1'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  )
}

export default App
