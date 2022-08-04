const URL = 'http://localhost:8080/api/cars/getAllCars';


const peticion = async( url ) => {
    const api = await fetch( url );
    const convertToJson = await api.json();
    const data = convertToJson.data.cars;
    mapData( data );
}

const mapData = list => {
    list.map( values => {
        return generateHTML({
          coche:  values.car,
          modelo: values.model,
          precio: values.price,
          combustible: values.gas,
          cv: values.power,
          imagen: values.imagesCars.map( image => image.img)
        })
    })
}

const generateHTML = object => {
    const div = document.querySelector('.container');
    const figure = `
    <div class="box">
            <h2 class="name">${object.modelo}</h2>
            <p class="info-data"><strong>Precio:</strong> ${object.precio}&nbsp; <strong>Combustible:</strong>${object.combustible}&nbsp; <strong>CV:</strong> ${object.cv}</p>
            <div class="circle"></div>
            <img src="${object.imagen}" class="product">
        </div>
    `;
    VanillaTilt.init(document.querySelectorAll(".box"));
    printHTML(figure, div);
}

const printHTML = ( figure, container ) => {
    container.innerHTML += figure;
}


peticion( URL );