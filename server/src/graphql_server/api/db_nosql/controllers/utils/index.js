import fs from 'fs';
import mkdirp from 'mkdirp';
import shortid from 'shortid';
import resizeImg from 'resize-img';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });


export const uploadImageUser = async (upload, email) => {
  console.log('upload',upload);
  if(upload){
    let UPLOAD_DIR = `./public/usuarios/${email}/images`

    const
        { createReadStream, filename, mimetype } = await upload,
        stream = createReadStream(),
        ID = shortid.generate(),
        imgPath = `${UPLOAD_DIR}/lg_${ID}_${filename}`,
        imgMdPath = `${UPLOAD_DIR}/md_${ID}_${filename}`,
        imgSxPath = `${UPLOAD_DIR}/sx_${ID}_${filename}`,
        PATH_IMAGE_USER = `${process.env.HTTP}://${process.env.BASE_URL_IMAGE}/public/usuarios/${email}/images/**size**_${ID}_${filename}`;

    mkdirp.sync(UPLOAD_DIR);
    return new Promise( (resolve,reject) => {
       stream
        .on('error', error => {
          if(stream.truncated)
            fs.unlinkSync(imgPath)
            console.log('error_truncate',error);
            reject(error);
        })
        .pipe(fs.createWriteStream(imgPath))
        .on('error', error => {
          console.log('errorfile',error)
          reject(error);
        })
        .on('finish', result => {
          resizeImg(fs.readFileSync(imgPath),{width: 250, height: 250})
            .then(buf => {
              fs.writeFileSync(imgMdPath, buf);
              resolve(`${PATH_IMAGE_USER}`);
          });
          resizeImg(fs.readFileSync(imgPath), { width: 65, height: 65 })
            .then(buf => {
              fs.writeFileSync(imgSxPath, buf);
              resolve(`${PATH_IMAGE_USER}`);
          });
        });
      });
  };
  return null;
};

export const SingleUpload = async ({upload,pathfile}) => {
  if(upload){
    let UPLOAD_DIR = `${process.env.HTTP}://${process.env.BASE_URL_IMAGE}/public/files_public/${pathfile}`;

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