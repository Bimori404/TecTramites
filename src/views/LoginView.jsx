// Router
import { NavLink } from 'react-router-dom';
// Componentes
import Logo from '../assets/logo.svg'
import PrimaryButton from '../components/primary_button.jsx';
import '../index.css'

function LoginView() {
    /* estilos especificos */
    const perstyle = {
        height: 600,
        width: 410
    }

    /* vista usando taildwind@3.4.1 */
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form color='primary' className="border border-gray-300 p-6 rounded-lg bg-white shadow-md filter drop-shadow-xl" style={perstyle}>
                    {/*  */}
                    <div className='pt-7'>
                        <a href="http://www.itsmante.edu.mx/" target="_blank">
                            <img src={Logo} className="logo react" alt="React logo" />
                        </a>
                    </div>
                    {/*  */}
                    <div className="flex flex-col space-y-2 p-6">
                        <h3 className="font-semibold text-2xl whitespace-nowrap tracking-tight">
                            Ingresa tu numero de control
                        </h3>
                    </div>
                    {/*  */}
                    <div className="px-6 space-y-4">
                        <div className="space-y-2">
                            <input type="text" 
                            className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50" />
                        </div>
                    </div>
                    {/*  */}
                    <div >
                        <NavLink to="/main" className="flex items-center py-4 px-6">
                            <PrimaryButton name="Buscar"/>
                        </NavLink>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginView;