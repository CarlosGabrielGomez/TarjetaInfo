function TarjetaInfo() {
  const description =
    "La zapatilla deportiva negra tiene un diseño moderno y elegante, ideal para quienes buscan estilo y comodidad en su calzado. Su parte superior está fabricada en un material sintético de alta calidad, con un acabado mate que le da un aspecto sofisticado. El tono negro predomina en toda la zapatilla, pero detalles sutiles como costuras visibles en un gris oscuro o plata resaltan su contorno. La suela es de goma antideslizante, con un patrón de tracción que ofrece estabilidad y adherencia en diversas superficies.";
  const name = "ShadowFlex";
  return (
    <div className="contenedor">
      <div className="fila">
        <img src="./src/assets/images/zapatilla.png" alt="" />
      </div>

      <h2>{name}</h2>

      <div className="fila">
        <p>{description}</p>
      </div>

      <div className="fila-boton">
        <button id="click" className="boton-sumar">
          Calcular
        </button>
      </div>
    </div>
  );
}

export { TarjetaInfo };
