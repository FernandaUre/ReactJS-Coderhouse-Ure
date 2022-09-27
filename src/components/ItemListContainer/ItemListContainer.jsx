import './ItemListContainer.css';

export default function ItemListContainer({ greetings }) {
  return (
    <div id='ContainerDiv'>
      <h2>ItemListContainer</h2>
      <p>{greetings}</p>
    </div>
  )
}
