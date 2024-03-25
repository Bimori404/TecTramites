// Router
import { NavLink } from 'react-router-dom';
// Componentes
import Logo from '../../assets/logo.svg'
// import Button from '../components/button.jsx';
import PrimaryButton from '../../components/primary_button.jsx';
import SecondaryButton from '../../components/secondary_button.jsx';

function DocumentsView() {
    /* estilos especificos */
    const perstyle = {
        height: 600,
        width: 410
    }

    /* vista usando taildwind@3.4.1 */
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form className="border border-gray-300 p-6 rounded-lg bg-white shadow-md filter drop-shadow-xl" style={perstyle}>
                    {/*  */}
                    <div className='pt-7'>
                        <a href="http://www.itsmante.edu.mx/" target="_blank">
                            <img src={Logo} className="logo react" alt="React logo" />
                        </a>
                    </div>
                    {/*  */}
                    <div className='pt-12'>
                        {/*  */}
                        <div className="w-350 h-10 flex items-center justify-center font-inter font-semibold text-xl leading-6 text-center text-[#BC955C]">
                            Desacarga tu Boleta!!
                        </div>
                        {/*  */}
                        <NavLink to="#" className="flex items-center p-1">
                            <PrimaryButton name="Descargar" />
                        </NavLink>
                        <NavLink to="#" className="flex items-center p-1">
                            <PrimaryButton name="Previsualizar" />
                        </NavLink>
                        {/* ESTES BOTON ES PROVICIONAL */}
                        <div>
                            <NavLink to="/main" className="flex items-center p-1">
                                <SecondaryButton name="Cancelar" />
                            </NavLink>
                        </div>
                        {/*  */}
                        <div className='pt-14'>
                            <div className="w-400 h-100 flex justify-center font-inter font-bold text-xl leading-6 text-center text-[var(--color-tertiary)] ">
                                “ENTRE MÁS GRANDE EL RETO <br />
                                MÁS GLORIOSO ES EL TRIUNFO”
                            </div>
                            <div className="w-350 h-8 flex justify-end font-inter font-semibold text-xs leading-6 text-[#BC955C]">
                                El Circo De Las Mariposas
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </>
    );
}

export default DocumentsView;