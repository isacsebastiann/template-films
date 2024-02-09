export interface Film {
    id: number; // Asumiendo que SERIAL se convierte en un entero.
    title: string;
    director: string;
    durationMinutes: number; // Cambiado de `duration` a `durationMinutes` para mantener consistencia.
    yearOfRelease: number;
    genre: string;
    rating: string;
    productionCountry: string;
    awards: string;
    synopsis: string;
    // `scenes` se mantiene para relacionar las escenas con la película.
    scenes: Scene[];
    // `createdAt` y `updatedAt` se omiten a menos que también estén presentes en tu base de datos.
  }
  
  export interface Scene {
    id: number; // Asumiendo que SERIAL se convierte en un entero.
    description: string;
    budget: number; // DECIMAL se puede representar como number en TypeScript.
    durationMinutes: number; // Cambiado de `minutes` a `durationMinutes` para mantener consistencia.
    location: string;
    filmingDate: Date;
    keyCharacters: string; // Texto que podría contener una lista de personajes clave, considera cambiar a un arreglo si necesitas una estructura más detallada.
    filmId: number;
    // `characters` se mantiene para relacionar los personajes con la escena.
    characters: Character[];
    // `createdAt` y `updatedAt` se omiten a menos que también estén presentes en tu base de datos.
  }
  
  export interface Character {
    id: number; // Asumiendo que SERIAL se convierte en un entero.
    name: string;
    actorName: string;
    race: string;
    alignment: string;
    backstory: string;
    appearanceInFilms: string; // Texto que podría enumerar las apariciones en películas, considera cambiar a un arreglo si necesitas una estructura más detallada.
    cost: number; // DECIMAL se puede representar como number en TypeScript.
    stock: number;
    sceneId: number;
    // `createdAt` y `updatedAt` se omiten a menos que también estén presentes en tu base de datos.
  }
  