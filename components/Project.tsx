type ProjectProps = {
  title: string;
  description: string;
  img: string;
  url: string;
  codeUrl: string;
};

function Project({ url, codeUrl, img, title, description }: ProjectProps) {
  return (
    <article className="projects__card">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          className="projects__img"
          src={img}
          alt={"Proyecto " + title}
          loading="lazy"
        />
      </a>
      <div className="projects__card__content">
        <h3 className="projects__card__title">{title}</h3>
        <p className="projects__card__paragraph">{description}</p>
        <div className="projects__card__btnContainer">
          <a
            className="projects__card__btn"
            target="_blank"
            href={url}
            rel="noreferrer"
          >
            Ver proyecto
          </a>
          <a
            className="projects__card__btn btn-view-code"
            target="_blank"
            href={codeUrl}
            rel="noreferrer"
          >
            Ver codigo
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
