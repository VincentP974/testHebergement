import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Si votre code React se trouve dans le dossier `src`
  build: {
    outDir: '../dist', // Sortie dans un dossier `dist` à la racine du projet
  },
  server: {
    open: true, // Ouvrir automatiquement le navigateur pendant le développement
  },
});