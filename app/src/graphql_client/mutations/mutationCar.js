import gql from 'graphql-tag';

export const NEW_CAR = gql`
  mutation newCar($car:InputCar){
    newCar(car:$car){
      state
      message
      placa
      modelo
      tipo
      marca
      propietario
      documento
      detalle
      fecha
      imageUrl
    }
  }
`;

export const EDIT_CAR = gql`
  mutation editCar($car:InputCar){
    editCar(car:$car){
      state
      message
      placa
      modelo
      tipo
      marca
      propietario
      documento
      detalle
      fecha
      imageUrl
    }
  }
`;

export const DELETE_CAR = gql`
  mutation deleteCar($placa:String){
    deleteCar(placa:$placa)
  }
`;
