import gql from 'graphql-tag';

export const PAGINATION_CARS = gql`
  query paginationCars($limit:Int,$offset:Int){
    paginationCars(limit:$limit,offset:$offset){
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
    totalCars
  }
`;