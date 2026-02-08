import "@material/web/button/filled-button.js";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/checkbox/checkbox.js";
import "@material/web/elevation/elevation.js";

const features = [
  {
    title: "Check-in ágil",
    description: "Valide credenciais com QR code e reduza filas em segundos."
  },
  {
    title: "Dados em tempo real",
    description: "Acompanhe entradas, saídas e presença da equipe instantaneamente."
  },
  {
    title: "Segurança por design",
    description: "Controle permissões e histórico de acessos em um único painel."
  }
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="overline">Credencia.me</p>
          <h1>Credenciamento inteligente para eventos e equipes.</h1>
          <p className="subtitle">
            Organize, valide e monitore acessos com uma plataforma criada em
            NodeJS, React e MongoDB.
          </p>
          <div className="hero__actions">
            <md-filled-button>Solicitar demonstração</md-filled-button>
            <md-outlined-text-field
              label="Seu melhor e-mail"
              type="email"
            ></md-outlined-text-field>
          </div>
          <div className="hero__consent">
            <md-checkbox checked></md-checkbox>
            <span>Quero receber novidades sobre o projeto.</span>
          </div>
        </div>
        <div className="hero__card">
          <md-elevation></md-elevation>
          <h2>Fluxo de credenciamento</h2>
          <ol>
            <li>Cadastre participantes e permissões.</li>
            <li>Gere QR codes personalizados.</li>
            <li>Valide entradas com app móvel.</li>
          </ol>
        </div>
      </header>

      <section className="features">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
