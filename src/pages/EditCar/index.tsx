import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import bigCarImage from '../../assets/big_car.png';
import bigHondaImage from '../../assets/big_honda.png';
import bigMbImage from '../../assets/big_mb.png';
import bigWwImage from '../../assets/big_ww.png';
import bigToyotaImage from '../../assets/big_toyota.png';

import { Context } from '../../contexts/Context';

export const EditCar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Context);

    const [canSend, setCanSend] = useState(false);
    const [brandField, setBrandField] = useState('');
    const [modelField, setModelField] = useState('');
    const [yearField, setYearField] = useState('');
    const [kmField, setKmField] = useState('');
    const [priceField, setPriceField] = useState('');

    useEffect(()=>{
        if(id) {
            let carItem = state.cars.find(item => item.id === id);
            if(carItem) {
                setBrandField(carItem.brand);
                setModelField(carItem.model);
                setYearField(carItem.year.toString());
                setKmField(carItem.km.toString());
                setPriceField(carItem.price.toString());
            } else {
                navigate('/');
            }
        } else {
            setBrandField('');
            setModelField('');
            setYearField('');
            setKmField('');
            setPriceField('');
        }
    }, [id, navigate, state.cars]);

    useEffect(()=>{
        // fixing year
        let currentYear = new Date().getFullYear();
        if(parseInt(yearField) > currentYear) {
            setYearField(currentYear.toString());
        }

        // fixing km
        if(kmField) {
            setKmField(parseInt(kmField).toString());
        }
    }, [yearField, kmField]);

    useEffect(()=>{
        if(brandField && modelField && yearField && kmField && priceField) {
            setCanSend(true);
        } else {
            setCanSend(false);
        }
    }, [brandField, modelField, yearField, kmField, priceField]);

    const handleSaveButton = () => {
        if(!id) {
            dispatch({
                type: 'ADD_CAR',
                payload: {
                    id: uuidv4(),
                    brand: brandField,
                    model: modelField,
                    year: parseInt(yearField),
                    km: parseInt(kmField),
                    price: parseFloat(priceField)
                }
            });
        } else {
            dispatch({
                type: 'EDIT_CAR',
                payload: {
                    id,
                    brand: brandField,
                    model: modelField,
                    year: parseInt(yearField),
                    km: parseInt(kmField),
                    price: parseFloat(priceField)
                }
            });
        }
        navigate('/');
    }

    return (
        <div className="container">
            <Link to="/" className="backButton">Voltar</Link>

            <h2>Cadastro de carro</h2>

            <div className="pageSplit">
                <div className="pageLeft">
                    <div className="form">
                        <select className="brandField" value={brandField} onChange={e => setBrandField(e.target.value)}>
                            <option value="">Selecione a marca</option>
                            <option value="honda">Honda</option>
                            <option value="ww">Volkswagen</option>
                            <option value="mb">Mercedes-Benz</option>
                            <option value="toyota">Toyota</option>
                        </select>

                        <input className="modelField" value={modelField} onChange={e => setModelField(e.target.value)}placeholder="Digite o modelo" />

                        <input className="yearField" value={yearField} onChange={e => setYearField(e.target.value)}type="number" placeholder="Digite o ano" />

                        <input className="kmField" value={kmField} onChange={e => setKmField(e.target.value)}type="number" placeholder="Digite a quilometragem" />

                        <input className="priceField" value={priceField} onChange={e => setPriceField(e.target.value)}type="number" placeholder="Digite o valor" />

                    </div>

                    <button className="button full" disabled={!canSend} onClick={handleSaveButton}>Cadastrar</button>
                </div>
                <div className="pageRight">
                    {!brandField && <img src={bigCarImage} alt="" />}
                    {brandField === 'honda' && <img src={bigHondaImage} alt="" />}
                    {brandField === 'mb' && <img src={bigMbImage} alt="" />}
                    {brandField === 'ww' && <img src={bigWwImage} alt="" />}
                    {brandField === 'toyota' && <img src={bigToyotaImage} alt="" />}
                </div>
            </div>
        </div>
    );
}