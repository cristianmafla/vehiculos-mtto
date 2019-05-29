import { userApi as model } from '../../../models/user_api';
import { uploadImageUser } from '../../utils'
import { hash, compare } from './bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({ path: 'variables.env' });

export const getTokenUser = async (inputEmail, inputPass) => {
  let token = {};
	await model.find({ email: inputEmail })
		.then(async userDB => {
			if(userDB.length > 0){
				const { name, lastname, email, password, imageUrl } = userDB[0];
				if(await compare(inputPass,password)){
          await model.updateOne({ email }, { $set: { online: true } });
					token =  jwt.sign({ name, lastname, email, imageUrl }, process.env.SECRET, { expiresIn: '7d' });
				}else{
          token = 'password error';
				};
			}else{
        token =  `user error` ;
			};
		})
		.catch(error => console.log('*** Error_modelDB', error));
  return { token };
};

export const addNewUser = user => {
  return new Promise((resolve, reject) => {
    model.find({ email: user.email }).then(userDB => {
      if (userDB.length != 0) {
        resolve({ state: false, message: `this user already exists: ${user.email}` });
      }else{
        uploadImageUser(user.file, user.email).then(urlImage => {
          hash(user.password).then(pass => {
            user.password = pass;
            user.imageUrl = urlImage || user.imageUrl
            model.create(user).then(({name,lastname,email,imageUrl,roles}) => {
              resolve({ state: true, message:'successfully created user', name, lastname, email, imageUrl, roles});
            })
            .catch(error => console.log('*** Error_modelDB', error));
          });
        });
      };
    })
    .catch(error => console.log('*** Error_modelDB', error));
  });
};