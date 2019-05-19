
export const ImageUrlUpload = image => {
  return new Promise((resolve, reject) => {
    const
    		filePath = image.target.value,
    		allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;	
    if(!allowedExtensions.exec(filePath)){
      resolve({state:false,message:`Archivo incorrecto, carge .jpeg .jpg .png .gif`});
    }else{
  		if(image.target.validity.valid) {
  			const reader = new FileReader();
  			reader.readAsDataURL(image.target.files[0]);
  			reader.onload = e => resolve({state:true,imageUrlUpload:e.target.result});
  		}
    }
  });
}

export const ImageUploadValid = image => {
	if(image){
		const extension = image.type.split('/')[1];
		if(extension === 'jpeg' || extension === 'jpg' || extension === 'png' || extension === 'gif' ||
			extension === 'JPEG' || extension === 'JPG' || extension === 'PNG' || extension === 'GIF'
			){
				return image;
		}else{
			return false;
		}
	}
};