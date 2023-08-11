import { TButtonProps } from "@/types/types";

const Button = ({children, type, className, onClick}: TButtonProps) => {
    return (
        <button
        type={type ? type : "button"}
        onClick={onClick && onClick}
        className={`${className && className} px-4 py-2 rounded-xl font-medium transition`}>
            {children}
        </button>
    );
};

export default Button;