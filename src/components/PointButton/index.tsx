import './styles.css';

type Props = {
    onClick?: () => void;
}

export const PointButton = ({ onClick }: Props) => {
    return (
        <div className="pointButton" onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}