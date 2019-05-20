import fs from 'fs';
import mkdirp from 'mkdirp';
import shortid from 'shortid';
import resizeImg from 'resize-img';


export const uploadImageUser = async (upload, correo) => {
  if(upload){
    let UPLOAD_DIR = `./public/usuarios/${correo}/images`

    const
        { createReadStream, filename, mimetype } = await upload,
        stream = createReadStream(),
        ID = shortid.generate(),
        path = `${UPLOAD_DIR}/${ID}_${filename}`,
        pathThumbnail = `${UPLOAD_DIR}/thumbnail_${ID}_${filename}`,
        PATH_IMAGE_USUARIO = `http://localhost:3000/public/usuarios/${correo}/images/thumbnail_${ID}_${filename}`;

    mkdirp.sync(UPLOAD_DIR);
    return new Promise( (resolve,reject) => {
       stream
        .on('error', error => {
          if(stream.truncated)
            fs.unlinkSync(path)
            console.log('error_truncate',error);
            reject(error);
        })
        .pipe(fs.createWriteStream(path))
        .on('error', error => {
          console.log('errorfile',error)
          reject(error);
        })
        .on('finish', result => {
          resizeImg(fs.readFileSync(path),{width: 170, height: 170})
            .then(buf => {
              fs.writeFileSync(pathThumbnail, buf);
              resolve(`${PATH_IMAGE_USUARIO}`);
            });
        });
      });
  };
  return null;
};

export const SingleUpload = async ({upload,pathfile}) => {
  if(upload){
    let UPLOAD_DIR ='';
    process.env.NODE_ENV === 'development'
      ? UPLOAD_DIR = `./src/assets/${pathfile}`
      : UPLOAD_DIR = `./dist/assets/${pathfile}`;

    const
        { createReadStream, filename, mimetype } = await upload,
        stream = createReadStream(),
        ID = shortid.generate(),
        path = `${UPLOAD_DIR}/${ID}_${filename}`,
        pathThumbnail = `${UPLOAD_DIR}/thumbnail_${ID}_${filename}`,
        PATH_DB = `../../assets/${pathfile}/thumbnail_${ID}_${filename}`;

    mkdirp.sync(UPLOAD_DIR);
    return new Promise((resolve,reject) => {
       stream
        .on('error', error => {
          if(stream.truncated)
            fs.unlinkSync(path)
            console.log('error_truncate',error);
            reject(error);
        })
        .pipe(fs.createWriteStream(path))
        .on('error', error => {
          console.log('errorfile',error)
          reject(error);
        })
        .on('finish', result => {
          resolve({
            path:PATH_DB,
            filename,
            mimetype
          });
        });
      });
  };
  return null;
};

export const createAt = () => {
  const format = date => {
    if(date <= 9){
      return `0${date}`
    }
    return date;
  }
  const 
    months = [
      "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre",
      "Noviembre", "Diciembre"
    ],
    date = new Date(),
    hours = format(date.getHours()),
    min = format(date.getMinutes()),
    seg = format(date.getSeconds()),
    day = format(date.getDate()),
    month = format(date.getMonth()),
    year = date.getFullYear();
  
  return `${day}/${month}/${year} ${hours}:${min}`;
}

export const errorHttp = status => {
    switch (status) {
        case 301:
            return 'se está haciendo una redirección de una página a otra';
            break;
        case 302:
            return 'se está haciendo una redirección de una página a otra';
            break;
        case 400:
            return 'la solicitud tiene una sintaxis incorrecta';
            break;
        case 403:
            return 'se ha denegado el acceso a la solicitud';
            break;
        case 404:
            return 'la página que se está tratando de cargar no se ha encontrado';
            break;
        case 500:
            return 'error interno del servidor';
            break;
        case 504:
            return 'el tiempo de espera para devolver la página web se ha agotado';
            break;
        case 509:
            return 'se ha superado el límite de ancho de banda disponible';
            break;
        default:
            return null;
            break;
    }
};