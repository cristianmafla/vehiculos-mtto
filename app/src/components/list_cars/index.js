import React,{Component, Fragment} from 'react';
import { Query,Mutation } from 'react-apollo';
import { PAGINATION_CARS} from '../../graphql_client/queries/queryCar';
import { NEW_CARS_FILE_EXCEL } from '../../graphql_client/mutations/mutationCar';
import { Helmet } from 'react-helmet';
import TemplateLayout from '../templateLayout';
import readXlsxFile from 'read-excel-file';
import $ from "jquery";
import moment from 'moment';
import { ExcelUpload } from '../utils';
import MessageFlash from '../utils/messageflash';
import ListCarsDb from './listCar';
import Pagination from '../pagination/pagination';

class ListCars extends Component {
	limit = 4;
	constructor(props){
		super(props);
		this.state = {
			excel: [],
			errorValid: {
				error: false,
				message: ''
			},
			pagination: {
				offset: 0,
				currentPage: 1
			},
		};
	}

	componentWillMount = () => {};

	componentDidMount = () => {};

	closeError = () => this.setState({ errorValid: { error: false } });

	onChange = e => readXlsxFile(e.target.files[0]).then(rows => this.setState({excel:rows}));

	pagePrevious = () => {
		this.setState({
			pagination: {
				offset: this.state.pagination.offset - this.limit,
				currentPage: this.state.pagination.currentPage - 1
			}
		});
	}

	pageFallowing = () => {
		this.setState({
			pagination: {
				offset: this.state.pagination.offset + this.limit,
				currentPage: this.state.pagination.currentPage + 1
			}
		});
	}

	finalPage = totalUser => this.state.pagination.currentPage === Math.ceil(Number(totalUser) / this.limit);

	onChangePag = page => {
		this.setState({
			pagination: {
				offset: page * this.limit,
				currentPage: page + 1
			}
		});
	};

	exportExcelDataBaseXXXX = (data, newCarFileEcxel) => {
		let documentEcxelDB = data.map((row) => {

			newCarFileEcxel({
				variables: {
					car: {
						placa: row[0],
						modelo: row[1],
						tipo: row[2],
						marca: row[3],
						propietario: row[4],
						documento: row[5],
						detalle: row[6],
						fecha: row[7],
						imageUrl:'public/assets/img_app/car.png'
					}
				}
			})
			.then(({ data }) => {
				if (data.newCarFileEcxel.state) {
					this.props.refetch().then(() => { }).catch(error => console.log('*** Error_refetch', error));
				}
			})
			.catch(error => console.log('error_newCarFileEcxel', error));

			return {
				placa:row[0],
				modelo:row[1],
				tipo:row[2],
				marca:row[3],
				propietario:row[4],
				documento:row[5],
				detalle:row[6],
				fecha: moment(row[7]).format('LLL'),
			}
		});
		console.log('documentEcxelDB',documentEcxelDB)
	}

	exportExcelDataBase = (data, newCarFileEcxel) => {
		let i = 0;
		data.map(row => {
			i = i + 1;
			newCarFileEcxel({ variables: { car:{ 
					placa: row[0],
					modelo: String(row[1]),
					tipo: row[2],
					marca: row[3],
					propietario: row[4],
					documento: String(row[5]),
					detalle: row[6],
					fecha: new Date(row[7])
			    }
			 }})
			.then(({ data }) => {
				if (data.newCarFileEcxel.state) {
					this.props.refetch().then(() => { }).catch(error => console.log('*** Error_refetch', error));
				}
			})
			.catch(error => console.log('error_newCarFileEcxel', error));

			return {
				placa: row[0],
				modelo: row[1],
				tipo: row[2],
				marca: row[3],
				propietario: row[4],
				documento: row[5],
				detalle: row[6],
				fecha: new Date(),
			}
		});
	};

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet>
					<title>mtto car</title>
				</Helmet>
				<div className="col-sm-12 col-lg-11 mx-auto form">
					<h1 className="h3 mb-3 font-weight-normal text-center">CARS IN MTTO</h1>
					<form className="file_excel">
						<h2 className="h4 mb-4 font-weight-normal text-center">upload file excel</h2>
						<MessageFlash errorValid={this.state.errorValid} closeError={this.closeError} />
						<div className="custom-file">
							<input
								type="file"
								className="custom-file-input"
								id="customFile"
								onChange={e => {
									ExcelUpload(e).then( result => {
										if(!result.state){
											this.setState({ errorValid: { error: true, message: result.message } });
										}
									});
									let fileName = $('#customFile').val().split("\\").pop();
									$('#customFile').siblings(".custom-file-label").addClass("selected").html(fileName);
									this.onChange(e);
								}}
								/>
							<label className="custom-file-label" htmlFor="customFile">Ecxel file</label>
						</div>
					</form>
					<div className="row mt-5">
						<div className="col-lg-6 p-2">
							<h2 className="h4  font-weight-normal text-center">
								DATA EXCEL 
								<Mutation mutation={NEW_CARS_FILE_EXCEL} >
									{(newCarFileEcxel, { loading, error, data }) => (
										<i
											style={{ paddingLeft: '25px', cursor: 'pointer', display: this.state.excel != 0 ? 'inline-block' : 'none' }}
											className="fas fa-file-export"
											title='export data-base'
											onClick={() => this.exportExcelDataBase(this.state.excel, newCarFileEcxel)}
										></i>
									)}
								</Mutation>
							</h2>

							{
								this.state.excel != 0
									? <div className="table-responsive">
										<table className="table table-striped table_list_users">
											<thead>
												<tr>
													<th>placa</th>
													<th>modelo</th>
													<th>tipo</th>
													<th>marca</th>
													<th>propietario</th>
													<th>Documento</th>
													<th>detalle</th>
													<th>fecha ingreso</th>
												</tr>
											</thead>

											<tbody>
												{
													this.state.excel.map((row, key) => (
														<tr key={key} className={key % 2 === 0 ? 'table-info' : ''}>
															<td>{row[0]}</td>
															<td>{row[1]}</td>
															<td>{row[2]}</td>
															<td>{row[3]}</td>
															<td>{row[4]}</td>
															<td>{row[5]}</td>
															<td>{row[6]}</td>
															<td>{moment(row[7]).format('LLL')}</td>
														</tr>
													))
												}
											</tbody>
										</table>
									</div>
									: null
							}
						</div>

						<div className="col-lg-6 p-2">
							<h2 className="h4  font-weight-normal text-center">DATA DB</h2>
							<Query query={PAGINATION_CARS} variables={{ limit: this.limit, offset: this.state.pagination.offset }} pollInterval={1500}>
								{({ loading, error, data, refetch }) => {
									if (loading) return 'loading...';
									if (error) return console.log('error_GRAPHQL_TOTAL_CARS', error);
									return (
										<Fragment>
											<ListCarsDb
												cars={data.paginationCars || []}
												refetch={refetch}
												session={this.props.session}
												history={this.props.history}
												currentPage={this.state.pagination.currentPage}
												totalPages={Math.ceil(Number(data.totalCars || 0) / this.limit)}
											/>
											<Pagination
												currentPage={this.state.pagination.currentPage}
												previousPage={this.pagePrevious}
												followingPage={this.pageFallowing}
												onChangePag={this.onChangePag}
												finalPages={this.finalPage(data.totalCars || 0)}
												totalPages={Math.ceil(Number(data.totalCars || 0) / this.limit)}
											/>
										</Fragment>
									);
								}}
							</Query>
						</div>
					</div>
				</div>
			</TemplateLayout>
		);
	}
}

export default ListCars;

