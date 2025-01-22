import {resolve} from 'path' 
export default{
    css:{
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ejeA: resolve(__dirname, 'src/pages/ejercicioA/index.html'),
                ejeB: resolve(__dirname, 'src/pages/ejercicioB/index.html'),
                ejeC: resolve(__dirname, 'src/pages/ejercicioC/index.html'),
                ejeD: resolve(__dirname, 'src/pages/ejercicioD/index.html')
            }    
        }
    }
}