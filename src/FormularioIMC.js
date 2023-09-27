import React, { useState } from 'react';

function FormularioIMC() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaMetros = altura / 100;
            const imcCalculado = peso / (alturaMetros * alturaMetros);
            setIMC(imcCalculado);

            if (imcCalculado < 18.5) {
                setClassificacao('Magreza');
            } else if (imcCalculado < 24.9) {
                setClassificacao('Normal');
            } else if (imcCalculado < 29.9) {
                setClassificacao('Sobrepeso');
            } else {
                setClassificacao('Obesidade');
            }
        }
    };

    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <div>
                <label htmlFor="altura">Altura (cm): </label>
                <input
                    type="number"
                    id="altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="peso">Peso (kg): </label>
                <input
                    type="number"
                    id="peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && classificacao && (
                <div>
                    <p>Seu IMC é: {imc.toFixed(2)}</p>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
}

export default FormularioIMC;
