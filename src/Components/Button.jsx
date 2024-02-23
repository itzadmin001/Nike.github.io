const Button = ({ label, backgroundColor,fullWidth, textColor, borderColor, iconUrl }) => {
    return (
        <button className={`flex  justify-center items-center gap-2 px-7 py-4 borber font-montserrat
            text-lg leading-none   
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
                "bg-coral-red text-white border-coral-red"}
            rounded-full ${fullWidth && "w-full"}}`}>
            {label}
            {iconUrl && <img src={iconUrl} alt=""
                className="ml-2 rounded-full w-f h-5 
            "/>}
        </button>
    );
}

export default Button;
