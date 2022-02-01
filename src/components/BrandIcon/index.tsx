import HondaImage from '../../assets/honda.png';
import WwImage from '../../assets/ww.png';
import MbImage from '../../assets/mb.png';
import ToyotaImage from '../../assets/toyota.png';

type Props = {
    brand: 'honda' | 'ww' | 'mb' | 'toyota';
}

export const BrandIcon = ({ brand }: Props) => {
    switch(brand) {
        case 'honda':
            return <img src={HondaImage} alt="" />;
        case 'ww':
            return <img src={WwImage} alt="" />;
        case 'mb':
            return <img src={MbImage} alt="" />;
        case 'toyota':
            return <img src={ToyotaImage} alt="" />;
    }
}