import './styles.css';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="headerContainer">
                <div className="headerLeft">
                    <Logo />
                </div>
                <div className="headerRight">
                    <Link to={'/car'} className="button">Cadastrar</Link>
                </div>
            </div>
        </header>
    );
}