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
        const { name, lastname, email, password, imageUrl,roles,mode } = userDB[0];
				if(await compare(inputPass,password)){
          if (mode === 'local') {
            await model.updateOne({ email }, { $set: { online: true } });
          };
					token =  jwt.sign({ name, lastname, email, imageUrl,roles,mode }, process.env.SECRET, { expiresIn: '7d' });
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
      if (userDB.length > 0) {
        if(user.mode != 'local'){
          model.updateOne({ email:user.email }, { $set: { online: true } })
            .then(() => {
              resolve({
                state: true,
                message: 'successfully created user',
                name:user.name,
                lastname:user.lastname,
                email:user.email,
                imageUrl:user.imageUrl,
                roles:user.roles,
                mode:user.mode
              });
            })
            .catch(error => console.log('*** Error_MONGODB_addNewUser_updateOne',error))
        }
        resolve({ state: false, message: `this user already exists: ${user.email}` });
      }else{
        uploadImageUser(user.file, user.email).then(urlImage => {
          hash(user.password).then(pass => {
            user.password = pass;
            user.imageUrl = urlImage || user.imageUrl
            user.online = true;
            model.create(user).then(({name,lastname,email,imageUrl,roles,mode}) => {
              resolve({ state: true, message:'successfully created user', name, lastname, email, imageUrl, roles,mode});
            })
            .catch(error => console.log('*** Error_modelDB', error));
          });
        });
      };
    })
    .catch(error => console.log('*** Error_modelDB', error));
  });
};


export const updateUser = user => {
  return new Promise((resolve, reject) => {
    uploadImageUser(user.file, user.email).then(urlImage => {
      user.imageUrl = urlImage || user.imageUrl
      const { name, lastname, email, imageUrl, roles } = user;
      model.updateOne({ email }, { $set: { name, lastname, email, imageUrl, roles } })
        .then(() => resolve({ state: true, message: 'successfully update user', name,lastname,email,imageUrl,roles }))
        .catch(error => console.log('*** Error_MONGODB_editUser', error));
    });
  });
};