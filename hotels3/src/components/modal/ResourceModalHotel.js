import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { uiCloseModal } from '../../actions/ui';

const initialState={
  id:'',
  country:'',
  name:'',
  address:'',
  rating:'',
  countryId:''
}

const State={
    data:[],
    modalInsertar: true,
    modalEliminar: false,
    };

export const ResourceModalHotel = () => {

  const dispatch = useDispatch();
  const { modalOpen } = useSelector(state => state.ui);
  
  
  const [state, setstate] = useState(State);
  const [formValues, setformValues] = useState(initialState)
  const {id, country,name,address,rating,countryId} = formValues;
    
  
  const closeModal = () => {
    // TODO: cerrar el modal
    dispatch( uiCloseModal() );
    // dispatch( eventClearActiveEvent() );
    // setFormValues( initEvent );
}
      
    
      const handleChange=async e=>{
          e.persist();
          await setstate({
            form:{
              ...state.form,
              [e.target.name]: e.target.value
            }
          })
      }

      const handleSubmitForm= (e)=>{
        e.preventDefault();
        dispatch( eventAddNew({
          ...formValues,
          id:'6',
          country:'',
          name:'Bahamas',
          address:'',
          rating:'',
          countryId:''
        })
        );
      }
   
        
      return (
        
        < >

            <Modal  isOpen={modalOpen}
                    centered={true}
                    onRequestClose={ closeModal }>
                    <ModalHeader style={{display: 'block'}}>
                      <span  onClick={()=>handleSubmitForm()}>nuevo</span>
                    </ModalHeader>
                    <ModalBody>
                      <div className="form-group">
                        <label htmlFor="nombre">id</label>
                        <input className="form-control" type="text" name="id" id="id" readOnly onChange={handleChange} value={id}/>
                        <br />
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text" name="name" id="name" onChange={handleChange} value={name}/>
                        <br />
                        <label htmlFor="nombre">Dirección</label>
                        <input className="form-control" type="text" name="address" id="address" onChange={handleChange} value={address}/>
                        <br />
                        <label htmlFor="nombre">Estrellas</label>
                        <input className="form-control" type="text" name="rating" id="rating" onChange={handleChange} value={rating}/>
                        <br />
                        <label htmlFor="nombre">countryId</label>
                        <input className="form-control" type="text" name="countryId" id="countryId" onChange={handleChange} value={countryId}/>
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
                   Estás seguro que deseas eliminar a la empresa {form && form.nombre}
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-danger" >Sí</button>
                  <button className="btn btn-secundary" onClick={()=>setstate({modalEliminar: false})}>No</button>
                </ModalFooter>
              </Modal>
        </>
    )
}
