import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { DELETE_CAR } from '../../graphql_client/mutations/mutationCar';
import FormEdit from './form_edit';
import ModalEditCar from '../modal';
import { SizeImageCar } from '../utils';
import moment from 'moment';


class ListCarsDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEditView:false,
      carEdit:{}
    };
  };

  componentWillMount = () => {

  };


  carDelete = (deleteCar,placa)  => {
    deleteCar({ variables: { placa } }).then(() => {
      this.props.refetch();
    }).catch(error => console.log('*** Error_GRAPHQL_DELETE_CAR', error));
  };

  viewModalEditCar = car => this.setState({ modalEditView:true, carEdit:car});

  closeModal = () => this.setState({ modalEditView: false });

  modalEditCar = () => (
    <ModalEditCar title="Edit Car" visibility={this.state.modalEditView} closeModal={this.closeModal} >
      <FormEdit
        modal={this.state.modalEditView}
        history={this.props.history}
        refetch={this.props.refetch}
        closeModal={this.closeModal}
        car={this.state.modalEditView ? this.state.carEdit || false : false}
      />
    </ModalEditCar>
  );

  priceMtto = (fecha, modelo) => {
    let
      day = new Date(fecha).getDate(),
      price = 200000,
      total = 0,
      porc = 0;

      if(day % 2 === 0 ){
        porc = 5;
      }
      if(modelo <= 1997){
        porc = porc + 20;
      }
      total = price + ((price * porc) / 100)
      return total;
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped table_list_users">
          <thead>
            <tr>
              <th>imagen</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>valor</th>
              <th>fecha ingreso</th>
              <th>placa</th>
              <th>modelo</th>
              <th>tipo</th>
              <th>marca</th>
              <th>propietario</th>
              <th>Documento</th>
              <th>detalle</th>
            </tr>
          </thead>

          <tbody>
            {this.props.cars.map((car,key) => (
              <tr key={key} className={key % 2 === 0 ? 'table-warning' : ''}>
                <td>
                  <div>
                    <img onClick={() => this.viewModalEditCar(car)} src={SizeImageCar(car.imageUrl, 'sx')} title="edit" />
                  </div>
                </td>
                <td><i onClick={() => this.viewModalEditCar(car)} className="fas fa-edit i_edit" title="edit"></i></td>
                <td>
                  <Mutation mutation={DELETE_CAR} >
                    {delCar => <i onClick={() => this.carDelete(delCar, car.placa)} className="fas fa-trash-alt i_delete" title="delete"></i>}
                  </Mutation>
                </td>
                <td><b>{this.priceMtto(car.fecha, car.modelo)}</b></td>
                <td>{moment(car.fecha).format('LLL')}</td>
                <td><b>{car.placa}</b></td>
                <td>{car.modelo}</td>
                <td>{car.tipo}</td>
                <td>{car.marca}</td>
                <td>{car.propietario}</td>
                <td>{car.documento}</td>
                <td>{car.detalle}</td>
              </tr>
            ))}
          </tbody>
        </table>
          <div className="text-center div_more_pag" >
          <b>{`${this.props.currentPage} - ${this.props.totalPages}`}</b>
          </div>
        {this.modalEditCar()}
      </div>
    );
  }
};

export default ListCarsDb;
