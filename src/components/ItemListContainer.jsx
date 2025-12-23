const ItemListContainer = ({ mensaje }) => {
    return (
      <section className="hero">
        <div className="container">
          <div className="card-glass text-center">
            <h1 className="display-5 fw-bold glow mb-4">
              {mensaje}
            </h1>
  
            <p className="lead text-light mb-4">
              Descubre entornos de realidad virtual diseñados para educación,
              empresas y experiencias inmersivas.
            </p>
  
            <p className="text-secondary">
              Muy pronto podrás explorar nuestro catálogo de espacios VR listos
              para integrar en tu sitio web o acceder desde Hubs.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ItemListContainer;