import BotonTemas from "./BotonTemas";

function GaleriaIntereses({temas}) {
  return (
    <div className="temas-conteiner">
        {temas.map((interes, index) => (
          <BotonTemas key={index} texto={interes} />
        ))}

    </div>
  );
}

export default GaleriaIntereses;