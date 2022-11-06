import './ItemCount.css';
import Swal from 'sweetalert2';

export default function ItemCount({ qty, setQty, stock, onAdd}) {
    
    const sumar = () => {
        qty < stock ? setQty(qty + 1) : Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No puedes agregar mas',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const restar = () => {
        qty > 1 ? setQty(qty - 1) : Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No puedes agregar menos',
            showConfirmButton: false,
            timer: 1500
          })
            };

    return (
    <>
           
        <div className='grid row' id='ItemCount'>
        
            <div> 
                <h6 id="spanStock">Stock: {stock}</h6>
            </div>
            <div>
                <button className='btnRestar' onClick={restar}>-</button>
                <span id='spanNumero'>{qty}</span>
                <button className='btnSumar' onClick={sumar}>+</button>
            </div>
            <button  onClick={() => {onAdd()}} id='btnReservar'>Reservar</button>
        </div>
    </>
  )
}