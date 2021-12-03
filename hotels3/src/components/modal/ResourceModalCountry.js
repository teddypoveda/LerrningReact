import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

//import moment from 'moment';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearModal } from '../../actions/events';

const initEvent={
  id:'',
  name:'',
  shortName:''
}

const State={
    data:[],
    modalInsertar: true,
    modalEliminar: false,
    };

export const ResourceModalCountry = () => {

  const dispatch = useDispatch();
  const { modalOpen } = useSelector(state => state.ui);
  const { activeEvent } = useSelector( state => state.country );
  
  const [state, setstate] = useState(State);
  const [formValues, setFormValues] = useState(initEvent)

  const {id, name, shortName } = formValues;
  
  useEffect(() => {
    if ( activeEvent ) {
        setFormValues( activeEvent );
    } else {
        setFormValues( initEvent );
    }
  }, [activeEvent, setFormValues])
    
  const closeModal = () => {
    // TODO: cerrar el modal
    dispatch( uiCloseModal() );
    dispatch( eventClearModal() );
    setFormValues( initEvent );
  }
      
    
  const handleChange= (e)=>{
    setFormValues({
        ...formValues,
        start: e
    })
  }

  const handleSubmitForm= (e)=>{
    e.preventDefault();
    dispatch( eventAddNew({
      ...formValues,
      id:'',
      name:'',
      shortName:''
    })
    );
    console.log(formValues);
  }


    
  return (
    
  <>
    <Modal  isOpen={modalOpen}
            centered={true}
            onRequestClose={ closeModal }>
      <ModalHeader style={{display: 'block'}}>
        <span  onClick={()=>handleSubmitForm()}> { (activeEvent)? 'Editar evento': 'Nuevo evento' }</span>
      </ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label htmlFor="nombre">id</label>
          <input className="form-control" type="text" name="id" id="id" readOnly onChange={handleChange} value={id}/>
          <br />
          <label htmlFor="nombre">Nombre</label>
          <input className="form-control" type="text" name="name" id="name" onChange={handleChange} value={name}/>
          <br />
          <label htmlFor="nombre">Indicativo</label>
          <input className="form-control" type="text" name="shortName" id="shortName" onChange={handleChange} value={shortName}/>
          <br />
        </div>
      </ModalBody>

      <ModalFooter>
        {state.tipoModal==='insertar'?
          <button className="btn btn-success" >
          Insertar
        </button>: <button className="btn btn-primary" >
          Actualizar
        </button>
        }
        <button className="btn btn-danger"onClick={()=>closeModal()} >Cancelar</button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={state.modalEliminar}>
      <ModalBody>
          Estás seguro que deseas eliminar a la empresa {formValues && name}
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" >Sí</button>
        <button className="btn btn-secundary" onClick={()=>setstate({modalEliminar: false})}>No</button>
      </ModalFooter>
    </Modal>
  </>
  )
}
