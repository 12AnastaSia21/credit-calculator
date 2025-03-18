import { useNavigate } from "react-router-dom";
import './TheButtonStart.sass'

export default function TheButtonStart() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/TheDefaultPage');
    };


    return (
        <div className='startpage'>
            <button className='button' onClick={handleClick}>Расчет платежей</button>
        </div>
    )
}