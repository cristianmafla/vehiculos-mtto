import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

  """ PAGINATION USERS ONLY ADMIN """
  paginationCars(limit:Int,offset:Int):[Car]

  """ TOTAL USERS FOR PAGINATION ADMIN """
  totalCars:Int

}

type Mutation {

  """CREATION NEW MTTO CAR"""
  newCar(car:InputCar):Car

  """CREATION NEW MTTO CAR FILE EXCEL"""
  newCarFileEcxel(car:InputCar):Car

  """EDIT CAR"""
  editCar(car:InputCar):Car

  """DELETE CAR"""
  deleteCar(placa:String):String
}
type Car {
    state:Boolean
    message:String
    placa:String
    modelo:String
    tipo:String
    marca:String
    propietario:String
    documento:String
    detalle:String
    fecha:Date
    imageUrl:String
}
input InputCar {
    placa:String
    modelo:String
    tipo:String
    marca:String
    propietario:String
    documento:String
    detalle:String
    fecha:Date
    imageUrl:String
    file:Upload
}

` ;