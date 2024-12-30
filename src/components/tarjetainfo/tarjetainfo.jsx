

function TarjetaInfo() {
  return (
    <div className="div-tarjeta">
      <div className="div-imagen">
        <img
          className="card-img"
          src="./src/assets/images/zapatilla.png"
          alt=""
        />
      </div>
      <div className="div-detalle">
        <h2>Card tittle</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="btn-inf"> more information </button>
      </div>
    </div>
  );
}

export { TarjetaInfo };
