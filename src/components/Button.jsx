/** @format */
import { useNavigate } from 'react-router-dom';

const Button = ({ children, backgroundColor, borderColor, textColor, fullWidth, icon }) => {
  const history = useNavigate();

  const handleRedirect = () => {
    switch (children) {
      case 'Shop now':
        console.log(children);
        break;
      case 'View Details':
        history('/shoe_details');
        console.log(children);
        break;
      case 'Learn More':
        console.log(children);
        break;
      case 'Sign up':
        console.log(children);
        break;
      default:
      // code block
    }
  };

  return (
    <button
      onClick={handleRedirect}
      className={`flex justify-center items-center gap-2 px-7 py-4 
				border font-montserrat text-lg leading-none rounded-full 
				${
          backgroundColor
            ? `${backgroundColor} ${borderColor} ${textColor} hover:text-white hover:bg-slate-gray transition duration-[300ms] ease-in-out dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 dark:hover:border-gray-100 dark:transition`
            : 'bg-coral-red border-coral-red text-white  hover:text-coral-red hover:border-coral-red hover:bg-white transition duration-[300ms] ease-in-out dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 dark:hover:border-gray-100'
        }
			${fullWidth && 'w-full'}
		 `}
    >
      {children}
      {icon && <img src={icon} alt="arrow-right" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
