import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className="cursor-pointer" onClick={() => navigate('/') }>
            <strong className="text-3xl">Electro<span className="text-blue-600">Kart</span></strong>
        </div>
    )
}

export default Logo;