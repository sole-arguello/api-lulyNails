const Footer = () => {
  return (
    <footer className="text-center pt-1">
      <div className="container__redes fs-3 d-md-flex justify-content-center">
        <div className="pb-2 fw-bold">Buscanos en las redes</div>
        <div className="container__redes--icono wrapper px-5">
          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>

          <div className="icon tiktok">
            <div className="tooltip">TikTok</div>
            <span>
              <i className="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <div className="icon email">
            <div className="tooltip">Email</div>
            <span>
              <i className="fa-regular fa-envelope"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="container__autor fs-3 d-md-flex justify-content-center">
        <div className="pb-2 fw-bold">
          &copy; 2022 <span className="marca fw-bold mx-1">Luly Nails</span> |
          Creada por
        </div>
        <div className="container__autor--name px-3">
          <a href="#" className="link__autor">
            Arguello Soledad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
