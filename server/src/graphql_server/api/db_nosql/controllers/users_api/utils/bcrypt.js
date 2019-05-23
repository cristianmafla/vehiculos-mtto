import bcryptjs from 'bcryptjs';

export const hash = pass => new Promise((res, rej) => bcryptjs.hash(pass, 5, (err, hash) => err ? rej(err) : res(hash)));

export const compare = async (inputPass,passDB ) => {
  let compare = null;
  await bcryptjs.compare(inputPass, passDB).then(result => compare = result).catch(error => console.log('*** Error_bcryptjs',error));
  return compare;
};