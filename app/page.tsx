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
      <article className="px-3 pt-2 z-10 justify-center">
        <h2 className="text-white text-center text-3xl sm:text-left sm:text-4xl md:text-5xl">
          👋 ¡Hola! Soy
        </h2>
        <h1 className="text-blue-600 font-bold text-center text-4xl sm:text-left sm:text-5xl md:text-7xl">
          David Jiménez
        </h1>
        <h3 className="text-white text-center text-xl sm:text-left sm:text-2xl md:text-4xl">
          Desarrollador de Software
        </h3>
        <p className="text-white mt-5 px-4 sm:p-0 text-base md:max-w-xl md:text-xl xl:mt-10 xl:text-2xl xl:max-w-2xl">
          Creo productos digitales que ayudan a las personas a resolver sus
          problemas. Soy un apasionado de la programación, el deporte y la
          música. Actualmente estudio Ingeniería de Servicios en la Universidad
          Rey Juan Carlos.
        </p>
        <div className="px-4 mt-10 sm:mt-5 sm:p-0 flex gap-9 justify-center sm:justify-start items-center">
          <SocialIcon href="https://github.com/dubisdev" icon={<GH />} />
          <SocialIcon
            href="https://www.linkedin.com/in/davidjmz/"
            icon={<Linkedin />}
          />
          <SocialIcon href="https://twitter.com/dubisdotdev" icon={<Tw />} />
        </div>
      </article>
      <div className="home__container-img">
        <img
          className="home__container-img__img"
          src="/profile.webp"
          alt="Foto de perfil"
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
          img="./songwrite.webp"
        />

        <Project
          url="https://twitter.com/AddTodoist/"
          codeUrl="https://github.com/AddTodoist/AddTodoist"
          title="AddTodoist TW Bot"
          description="Bot de Twitter que permite agregar tareas a Todoist a partir de
          twits. Creado con Node.js, Typescript y MongoDB (mongoose)."
          img="/addtodoist.png"
        />

        <Project
          url="https://github.com/dubisdev/runmath"
          codeUrl="https://github.com/dubisdev/runmath"
          title="RunMath"
          description="Alternativa a la calculadora de Windows, creada con Tauri y React.
          Permite a los usuarios ejecutar operaciones matemáticas de forma rápida y sencilla,
          sin necesidad de utilizar el ratón."
          img="/runmath.png"
        />

        <Project
          url="https://cerebroapp.vercel.app/"
          codeUrl="https://github.com/cerebroapp/cerebro"
          title="CerebroApp"
          description="Cerebro es un lanzador de aplicaciones extensible y
          multiplataforma, creado con Electron y React. Soy mantenedor de
          todo el proyecto (desarrollo, plugins, documentación, etc)."
          img="/cerebro.png"
        />
      </div>
    </main>
    <div className="skills" id="habilidades">
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
    <footer className="text-white py-2 text-center mt-14">
      Hecho con ❤️ por David
    </footer>
  </>
);

export default Home;
