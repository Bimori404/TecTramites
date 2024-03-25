// Router   
import { Navigate, Route, Routes } from 'react-router-dom';
// vistas
import LoginView from './views/LoginView.jsx'
import PrincipalView from './views/PrincipalView.jsx'

import BoletaView from './views/docsViews/BoletaView.jsx'
import ConstanciaView from './views/docsViews/ConstanciaView.jsx'
import KardexView from './views/docsViews/KardexView.jsx'

function App() {
    return (
        <>
            <div className="bgImg"></div>
                <Routes>
                    <Route path='/' element={<LoginView/>}></Route>
                    {/* 
                        En "Route path='/main'" se debe de mostrar el
                        numero de control del estudiante
                    */}
                    <Route path='/main' element={<PrincipalView/>}></Route>
                    {/*  */}
                    <Route path='/main/boleta' element={<BoletaView/>}></Route>
                    <Route path='/main/constancia' element={<ConstanciaView/>}></Route>
                    <Route path='/main/kardex' element={<KardexView/>}></Route>
                    {/* 
                        "path='/*'" capta si una ruta no existe y
                        redirige automáticamente al componente
                        representado por la ruta "/main".
                    */}
                    <Route path='/*' element={<Navigate to="/main"/>}></Route>
                </Routes>
        </>
    );
}

export default App;
