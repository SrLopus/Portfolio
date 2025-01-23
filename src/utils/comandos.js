let cabecera =
`─────────────────────── ABOUT ME ──────────────────── \n
Este es un terminal interactivo donde puedes conocerme un poco más.\n  
\n
Escribe el comando \'help\' para ver la lista de comandos.\n
──────────────────────────────────────────────────\n`;

let help=`Comandos disponibles:
    - whoami: Descubre quién soy.
    - skills: Lista mis habilidades destacadas.
    - dream: Mis aspiraciones como desarrollador.
    - hacktime: Tiempo promedio para resolver problemas.
    - game: Juega a un minijuego de guess the number.
    - clear: Limpia la terminal para empezar de nuevo.`;

let whoami = `Si has llegado hasta aquí, ¡te felicito! Me alegra mucho que 
quieras saber algo más sobre mí.

Siempre he pensado que la tecnología es mi pasión.
Desde pequeño ya apuntaba maneras: desmontando ordenadores,
explorando cómo funcionaban los videojuegos y soñando
con crear mis propias herramientas.

Ahora, como desarrollador web, combino esa pasión
con mi amor por resolver problemas y crear soluciones
que realmente aporten valor. Creo firmemente que
la programación es una herramienta poderosa para mejorar el mundo.

const aboutMe = {
    name: "Raúl Juan Martí",
    age: 23,
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "PHP", 
    "Java","REACT"],
    specialty: "Desarrollo de Aplicaciones Web",
    hobbies: ["Videojuegos", "Aprendizaje continuo","Programación"]
}.

Mi filosofía: "Aprender, crear, compartir. Y repetir."`

let skills=`**Gestión de Proyectos:**
- Uso de herramientas de control de versiones como Git y GitHub.

**Administración de Sistemas:**
- Configuración y gestión de servidores Linux (Debian, Ubuntu).
- Experiencia en servicios como Nginx, Apache y Docker.
- Seguridad en conexiones remotas (SSH, permisos y autenticación).

**Desarrollo de Interfaces:**
- Diseño de interfaces gráficas modernas y funcionales.
- Aplicación de guías de estilo y diseño centrado en el usuario.
- Creación de animaciones fluidas y efectos interactivos.

**Resolución de Problemas:**
- Solución rápida y eficaz a incidencias técnicas.
- Análisis crítico y optimización de sistemas existentes.
- Automatización de tareas repetitivas.

**Idiomas:**
- Español y Catalán (Nativo).
- Inglés (Nivel B2, fluido en lectura, escritura y conversación).`

let dream = `$ dream
Soñando... 🌟
----------------------------------------------
1. Mejorar mis habilidades en desarrollo web.
2. Contribuir a proyectos de código abierto.
3. Crear aplicaciones innovadoras.
4. Liderar equipos de desarrollo.
5. Hacer una aplicacion conocida en todo el mundo.
----------------------------------------------
Mi sueño: ser un desarrollador integral y dejar un 
impacto positivo con mis proyectos. ¡A seguir creciendo!`

let hacktime = `Tiempo promedio para resolver problemas: 45 minutos…
aunque a veces parece que mi cerebro necesita 
una actualización. 🤔 
Algunas veces resuelvo en minutos, y otras, 
el café se convierte en mi mejor amigo. ☕✨`;


export{
    cabecera,help,whoami,skills,dream,hacktime
}