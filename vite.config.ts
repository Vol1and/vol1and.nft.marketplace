import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
    define: {
        __IS__DEV__: JSON.stringify(true),
    },
});
