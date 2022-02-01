import { useNavigate } from 'react-router-dom';
import './styles.css';

export const Logo = () => {
    const navigate = useNavigate();

    return (
        <div className="logo" onClick={() => navigate('/')}>
            <div className="mainLogo"><span>CAR</span>DASTRO</div>
            <div className="powered">powered by B7Web</div>
        </div>
    );
}