import ButtonNode from './ButtonNode'
import CardNode from './CardNode'

export const initialNodes = [
  { id: '1', type: 'card', data: { title: 'Node 1', description: 'Node 1 Description' }, position: { x: 0, y: 0 } },
  { id: '2', type: 'button', data: { label: 'Node 2' }, position: { x: 220, y: 23 } }
]

export const nodeTypes = {
  card: CardNode,
  button: ButtonNode
}
