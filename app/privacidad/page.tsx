import type { Metadata } from "next"
import { site } from "@/data/site"
import PageIntro from "../components/PageIntro"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de la web de Raquel Pérez Pintor: qué datos se recogen, para qué se usan, cuánto tiempo se conservan y cómo ejercer tus derechos.",
  alternates: { canonical: "/privacidad" },
}

const sections = [
  ["responsable", "Responsable del tratamiento"],
  ["datos", "Qué datos recogemos"],
  ["finalidad", "Para qué usamos tus datos"],
  ["base", "Base jurídica"],
  ["conservacion", "Cuánto tiempo los conservamos"],
  ["destinatarios", "Con quién los compartimos"],
  ["cookies", "Cookies"],
  ["derechos", "Tus derechos"],
  ["seguridad", "Seguridad"],
  ["cambios", "Cambios en esta política"],
  ["contacto", "Contacto"],
] as const

export default function PrivacidadPage() {
  return (
    <main id="contenido" className="page-main">
      <PageIntro
        kicker="Información legal"
        title={
          <>
            Política de <em>privacidad</em>.
          </>
        }
        lede="Quiero que sepas exactamente qué pasa con tus datos cuando hablas conmigo. Sin letra pequeña innecesaria."
        crumbs={[{ label: "Política de privacidad" }]}
      />

      <section className="legal" aria-label="Política de privacidad">
        <div className="shell legal__grid">
          <aside className="legal__toc" aria-label="Índice de contenidos">
            <div className="legal__toc-inner">
              <p className="legal__toc-title">En esta página</p>
              <ol>
                {sections.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="legal__body">
            <p className="legal__updated">
              Última actualización: 30 de octubre de 2026
            </p>

            <section id="responsable">
              <h2>1. Responsable del tratamiento</h2>
              <p>
                La responsable de los datos personales que se recogen en esta web
                es <strong>{site.name}</strong>, con domicilio profesional en
                Málaga (España) y correo electrónico{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
              <p>
                Esta web es un portfolio profesional. No es una tienda online ni
                un servicio que requiera registro de usuarios.
              </p>
            </section>

            <section id="datos">
              <h2>2. Qué datos recogemos</h2>
              <p>
                Solo recogemos los datos que tú decides facilitar a través del
                formulario de contacto o por email, teléfono o WhatsApp:
              </p>
              <ul>
                <li>Tu nombre.</li>
                <li>Tu dirección de correo electrónico.</li>
                <li>El tipo de proyecto que te interesa.</li>
                <li>El contenido del mensaje que me escribes.</li>
              </ul>
              <p>
                No se recogen datos especialmente protegidos. No se usan cookies
                de analítica, publicidad ni seguimiento.
              </p>
            </section>

            <section id="finalidad">
              <h2>3. Para qué usamos tus datos</h2>
              <p>Los datos se utilizan únicamente para:</p>
              <ul>
                <li>Leer y responder a tu consulta.</li>
                <li>Valorar si el proyecto encaja y, si es así, preparar una propuesta.</li>
                <li>Mantener la comunicación necesaria durante el proceso.</li>
              </ul>
              <p>
                No se usan para enviarte newsletters, publicidad ni comunicaciones
                comerciales que no hayas solicitado.
              </p>
            </section>

            <section id="base">
              <h2>4. Base jurídica</h2>
              <p>
                La base legal para tratar tus datos es el <strong>consentimiento</strong>{" "}
                que prestas al enviar el formulario y aceptar esta política
                (artículo 6.1.a del RGPD). También puede aplicarse el interés
                legítimo en responder a una consulta profesional que tú inicias
                (artículo 6.1.f del RGPD).
              </p>
              <p>
                Puedes retirar el consentimiento en cualquier momento escribiendo a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>. La retirada no
                afecta a la licitud del tratamiento realizado antes.
              </p>
            </section>

            <section id="conservacion">
              <h2>5. Cuánto tiempo los conservamos</h2>
              <p>
                Los mensajes de consulta se conservan mientras dure la
                conversación y, después, durante un máximo de <strong>12 meses</strong>{" "}
                para poder retomar el hilo si vuelves a escribir. Si se formaliza
                una relación profesional, se conservarán los datos necesarios
                durante la relación y los plazos legales aplicables.
              </p>
              <p>
                Cuando ya no sean necesarios, se eliminarán de forma segura.
              </p>
            </section>

            <section id="destinatarios">
              <h2>6. Con quién los compartimos</h2>
              <p>
                No se venden ni se ceden tus datos a terceros. Para que la web
                funcione, pueden intervenir proveedores que actúan como
                encargados del tratamiento:
              </p>
              <ul>
                <li>
                  <strong>Proveedor de alojamiento y correo electrónico:</strong>{" "}
                  para alojar la web y enviar o recibir los mensajes.
                </li>
                <li>
                  <strong>Proveedor de envío del formulario:</strong> si se usa un
                  servicio externo para hacer llegar el mensaje al correo de
                  contacto.
                </li>
              </ul>
              <p>
                Estos proveedores solo tratan los datos necesarios para prestar el
                servicio y deben ofrecer garantías adecuadas de protección. No se
                realizan transferencias internacionales fuera del Espacio Económico
                Europeo salvo que el proveedor cuente con las garantías legales
                correspondientes.
              </p>
            </section>

            <section id="cookies">
              <h2>7. Cookies</h2>
              <p>
                Esta web no utiliza cookies de analítica, publicidad ni
                seguimiento. Tampoco incorpora píxeles de redes sociales ni
                herramientas de perfilado.
              </p>
              <p>
                El proveedor de alojamiento puede usar cookies técnicas
                estrictamente necesarias para el funcionamiento y la seguridad del
                sitio. Si en el futuro se incorporan cookies no técnicas, se
                pedirá consentimiento previo y se actualizará esta política.
              </p>
            </section>

            <section id="derechos">
              <h2>8. Tus derechos</h2>
              <p>
                Puedes ejercer los siguientes derechos escribiendo a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>, indicando el
                derecho que quieres ejercer y adjuntando un medio que permita
                identificarte:
              </p>
              <ul>
                <li>Acceso a los datos que tengo sobre ti.</li>
                <li>Rectificación de datos inexactos o incompletos.</li>
                <li>Supresión de los datos cuando ya no sean necesarios.</li>
                <li>Oposición al tratamiento.</li>
                <li>Limitación del tratamiento.</li>
                <li>Portabilidad de los datos.</li>
                <li>Retirada del consentimiento.</li>
              </ul>
              <p>
                Responderé en el plazo máximo de un mes. Si consideras que no se
                han atendido correctamente tus derechos, puedes presentar una
                reclamación ante la Agencia Española de Protección de Datos
                (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
              </p>
            </section>

            <section id="seguridad">
              <h2>9. Seguridad</h2>
              <p>
                Se aplican medidas técnicas y organizativas razonables para
                proteger los datos frente a accesos no autorizados, pérdida o
                alteración: conexión cifrada mediante HTTPS, acceso restringido al
                correo y revisión periódica de los mensajes almacenados.
              </p>
              <p>
                Ningún sistema es infalible, pero se pone el cuidado necesario para
                que tus datos estén protegidos.
              </p>
            </section>

            <section id="cambios">
              <h2>10. Cambios en esta política</h2>
              <p>
                Esta política puede actualizarse si cambian los servicios, los
                proveedores o la normativa aplicable. La versión vigente será
                siempre la publicada en esta página, con su fecha de actualización
                visible.
              </p>
            </section>

            <section id="contacto">
              <h2>11. Contacto</h2>
              <p>
                Si tienes cualquier duda sobre cómo se tratan tus datos, escríbeme
                a <a href={`mailto:${site.email}`}>{site.email}</a>. Intento
                responder en menos de {site.responseTime}.
              </p>
              <div className="legal__note">
                <strong>Resumen rápido:</strong> solo uso tus datos para
                responderte, no los vendo ni los comparto para publicidad, y puedes
                pedirme que los borre cuando quieras.
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
