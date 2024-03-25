// Boton color vino
const PrimaryButton = (props) => {
    const {name} = props;
    return (
        <>
            <button className="w-full h-10 px-2.5 py-2 bg-primary rounded-md text-sm font-medium text-white">
                {name}
            </button>
        </>
    )
}

export default PrimaryButton;
