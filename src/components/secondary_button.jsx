// Boton color gris
const SecondaryButton = (props) => {
    const {name} = props;
    return (
        <>
            <button className="w-full h-10 px-4 py-2 bg-secondary rounded-md text-sm font-medium text-white">
                {name}
            </button>
        </>
    )
}

export default SecondaryButton;