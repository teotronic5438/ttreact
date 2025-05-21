function GaleriaIntereses({temas}) {
  return (
    <div className="temas-conteiner">
        {temas.map((tema) => (
            <button key={tema.id} className="tema-boton">{tema}</button>
        ))}
    </div>
  );
}

export default GaleriaIntereses;