import GH from "../components/icons/GH";
import Linkedin from "../components/icons/Linkedin";
import Tw from "../components/icons/Tw";
import Project from "../components/Project";
import SocialIcon from "../components/SocialIcon";
import StarsBG from "../components/StarsBG";

const skills = [
  { name: "HTML", iconSrc: "./skills/html.svg" },
  { name: "JavaScript", iconSrc: "./skills/javascript.svg" },
  { name: "TypeScript", iconSrc: "./skills/typescript.svg" },
  { name: "React", iconSrc: "./skills/react.svg" },
  { name: "TailwindCSS", iconSrc: "./skills/tailwindcss.svg" },
  { name: "Git", iconSrc: "./skills/git.svg" },
  { name: "Node.js", iconSrc: "./skills/node-js.svg" },
  { name: "Express", iconSrc: "./skills/expressjs.svg" },
  { name: "MongoDB", iconSrc: "./skills/mongodb.svg" },
  { name: "Next.js", iconSrc: "./skills/nextjs.svg" },
];

const Home = () => (
  <>
    <header className="home" id="home">
      <StarsBG />
      <article className="home__text">
        <h2 className="home__title h2">👋 ¡Hola! Soy</h2>
        <h1 className="home__title h1">David Jiménez</h1>
        <h3 className="home__title h3">Desarrollador de Software</h3>
        <p className="home__paragraph">
          Creo productos digitales que ayudan a las personas a resolver sus
          problemas. Soy un apasionado de la programación, el deporte y la
          música. Actualmente estudio Ingeniería de Servicios en la Universidad
          Rey Juan Carlos.
        </p>
        <div className="social">
          <SocialIcon href="https://github.com/dubisdev" icon={<GH />} />
          <SocialIcon
            href="https://www.linkedin.com/in/davidjmz/"
            icon={<Linkedin />}
          />
          <SocialIcon href="https://twitter.com/dubisdev" icon={<Tw />} />
        </div>
      </article>
      <div className="home__container-img">
        <img
          className="home__container-img__img"
          src="https://avatars.githubusercontent.com/u/77246331"
          alt="Imagen ilustrativa programando"
        />
      </div>
    </header>
    <main className="projects" id="proyectos">
      <h2 className="title">Proyectos</h2>
      <div className="projects__grid">
        <Project
          url="https://songwrite.app/"
          codeUrl="https://github.com/dubisdev/songwriteapp"
          title="SongWrite.app"
          description="Editor de letras y acordes creado con Next.js, TailwindCss y
          PostgreSQL. Utiliza Supabase como backend para la autenticación y
          la base de datos."
          img="./images/projects/space-tourism.jpg"
        />

        <Project
          url="https://twitter.com/AddTodoist/"
          codeUrl="https://github.com/AddTodoist/AddTodoist"
          title="AddTodoist TW Bot"
          description="Bot de Twitter que permite agregar tareas a Todoist a partir de
          twits. Creado con Node.js, Typescript y MongoDB (mongoose)."
          img="./images/projects/space-tourism.jpg"
        />

        <Project
          url="https://cerebroapp.vercel.app/"
          codeUrl="https://github.com/cerebroapp/cerebro"
          title="CerebroApp"
          description="Cerebro es un lanzador de aplicaciones extensible y
          multiplataforma, creado con Electron y React. Soy mantenedor de
          todo el proyecto (desarrollo, plugins, documentación, etc)."
          img="./images/projects/space-tourism.jpg"
        />
      </div>
    </main>
    <div className="skills" id="skills">
      <h2 className="title">Habilidades</h2>
      <div className="skills__container">
        <ul className="skills__lista">
          {skills.map(({ iconSrc, name }) => {
            return (
              <li key={name}>
                <img src={iconSrc} alt={name + " icon"} />
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    {/* <footer className="contact" id="contact">
  <div className="contact__window">
    <span className="contact__window__span">
      Correo enviado con exito!
    </span>
  </div>
  <h2 className="title">Contáctame</h2>
  <form
    action="https://formspree.io/f/mjvjjqgw"
    method="POST"
    className="contact__form"
  >
    <label className="contact__form__title">
      ¿Tienes algún proyecto web en mente? Para más información envíame un
      email sobre el proyecto que tienes planeado y en seguida nos ponemos
      en contacto 🧑‍💻
    </label>
    <input
      name="name"
      id="name"
      className="contact__input"
      type="text"
      placeholder="Nombre"
      required
    />
    <input
      name="email"
      id="email"
      className="contact__input"
      type="email"
      placeholder="Correo Electronico"
      pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
      required
    />
    <textarea
      name="message"
      id="message"
      className="contact__input msg"
      type="text"
      placeholder="Mensaje"
      required
      maxlength="255"
    ></textarea>
    <button type="submit" className="projects__card__btn contact__send">
      Enviar
    </button>
  </form>
</footer> */}
  </>
);

export default Home;
