export class ConvertImageService{
   async convertToUrl(file: File){
    const formData = new FormData();
    formData.append('image', file);
    try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=07d4a797292ad684c2fc3c62103d1831', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch (error) {
       alert("Error al subir la imagen");
   }
  }
}
    