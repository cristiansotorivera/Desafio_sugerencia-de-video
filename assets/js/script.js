
// IIFE (Immediately Invoked Function Expression) to encapsulate functionality
const desafioVideos = (() => {

    // Private function to set attribute of an element
    const setAtributo = (elemento, atributo, valor) => {
        elemento[atributo] = valor;
    }

    // Return an object with a public function
    return {
        // Public function to set attribute of an element
        setAtributoPublico(elemento, valor) {
            setAtributo(elemento, "src", valor);
        }
    };
})();

// Querying DOM elements
const domMusica = document.querySelector("#domMusica");
const domPeliculas = document.querySelector("#domPeliculas");
const domSeries = document.querySelector("#domSeries");

// Parent class for multimedia elements
class Multimedia {
    // Private field for URL
    #url;
    constructor(url) {
        this.#url = url;
    }
    // Getter for URL
    get url() {
        return this.#url;
    }
    // Method to set start time of multimedia
    setInicio() {
        return "Método para realizar un cambio en la URL del video";
    }
}

// Child class for multimedia player
class Reproductor extends Multimedia {
    // Private field for DOM element
    #elemento;
    constructor(elemento, url) {
        super(url);
        this.#elemento = elemento;
    }
    // Method to play multimedia
    playMultimedia() {
        // Call public function from IIFE to set attribute of element
        desafioVideos.setAtributoPublico(this.#elemento, this.url);
    }
    // Method to set start time of multimedia
    setInicio(tiempo) {
        // Call public function from IIFE to set attribute of element with start time
        desafioVideos.setAtributoPublico(this.#elemento, `${this.url}?start=${tiempo}`);
        console.log(`${this.url}?start=${tiempo}`);
    }
}

// Creating instances for different multimedia elements
const musica = new Reproductor(domMusica, "https://www.youtube.com/embed/dWgG3bnVUS0?si=GuPWgPJ531eiQg-6");
musica.setInicio(50); // Set start time
musica.playMultimedia(); // Play multimedia

const peliculas = new Reproductor(domPeliculas, "https://www.youtube.com/embed/1roy4o4tqQM?si=Psyd5qnWDMGCvwpd");
peliculas.setInicio(10); // Set start time
peliculas.playMultimedia(); // Play multimedia

const series = new Reproductor(domSeries, "https://www.youtube.com/embed/a1zmhHLVrq0?si=iuky9OuRIVGZ-BCA");
series.setInicio(20); // Set start time
series.playMultimedia(); // Play multimedia
