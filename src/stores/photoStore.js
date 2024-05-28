import { defineStore } from "pinia";

export const usePhotoStore = defineStore("photoStore", () => {
  const photoName = "Título de la foto";

  return { photoName };
});
