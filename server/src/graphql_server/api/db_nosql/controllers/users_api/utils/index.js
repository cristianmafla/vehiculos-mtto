import { userApi as model } from '../../../models/user_api';
import { uploadImageUser } from '../../utils'
import { hash, compare } from './bcrypt';

import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
import jwt from 'jsonwebtoken';


export const getTokenUser = async (inputEmail, inputPass) => {
	let token = '';
	await model.find({ email: inputEmail })
		.then(async userDB => {
			if(userDB.length > 0){
				const { name, lastname, email, password, imageUrl } = userDB[0];
				if(await compare(inputPass,password)){
					token =  jwt.sign({ name, lastname, email, imageUrl }, process.env.SECRET, { expiresIn: '1h' });
				}else{
					token = 'password error'
				};
			}else{
				token =  `not user ${inputEmail}` ;
			};
		})
		.catch(error => console.log('*** Error_modelDB', error));
		return { token };
};

export const addNewUser =  user => {
	return new Promise((resolve,reject) => {
			model.find({email:user.email}).then(userDB => {
					if (userDB.length  != 0){
							resolve({ state: false, message: `ya existe un usuario ${user.email}`});
					}else{
							uploadImageUser(user.file, user.email).then(urlImage => {
									hash(user.password).then(pass => {
											user.password = pass;
											user.imageUrl = urlImage || user.imageUrl
											model.create(user).then(result => {
													result.state = true;
													resolve(result);
											})
											.catch(error => console.log('*** Error_modelDB', error));
									})
							});
					};
			})
			.catch(error => console.log('*** Error_modelDB',error));
	});
};