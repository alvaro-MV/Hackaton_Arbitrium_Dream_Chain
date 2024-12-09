# DreamChain: Transformando Sueños en Realidad

`DreamChain` transforma metas, sueños y objetivos personales en contratos inteligentes respaldados por blockchain, conectando soñadores con mentores y financiadores. Promueve la colaboración global para empoderar a las personas y convertir sueños en realidades tangibles.

---------------------------------------------------------------------------------------------------------------------------------

# Tabla de Contenidos
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Cómo Funciona](#cómo-funciona)
3. [Enlace al Demo](#enlace-al-demo)
5. [Instalación y Ejecución](#instalación-y-ejecución)
7. [Contribuidores y Agradecimientos](#contribuidores)



## Descripción del Proyecto

**DreamChain** es una plataforma revolucionaria que utiliza tecnología blockchain para convertir sueños en activos digitales. Estos sueños, ya sean proyectos personales, metas de vida, o mejoras esenciales como construir un hogar seguro en una comunidad africana, son registrados como contratos inteligentes. La plataforma ofrece dos formas clave de apoyo: **microdonaciones** de usuarios solidarios y **mentoría personalizada** de expertos en áreas relevantes.



#### El Problema que Aborda

En un mundo lleno de posibilidades, muchas personas con sueños humildes o grandes proyectos carecen de acceso a los recursos necesarios para materializarlos. Las barreras financieras, la falta de conocimiento o redes de apoyo limitan su capacidad de avanzar. **DreamChain elimina estas barreras proporcionando un ecosistema donde los sueños se convierten en colaboraciones transparentes y accesibles.**

#### Un Caso de Uso Concreto

Imagina a **Amina**, una madre en África que sueña con construir un techo resistente para proteger a su familia durante las lluvias. Amina registra su sueño en DreamChain y comparte su historia. Personas de todo el mundo, movidas por su causa, aportan pequeñas donaciones y consejos prácticos sobre construcción sostenible.  

Meses después, Amina comparte fotos de su hogar terminado, logrando no solo un cambio físico, sino una transformación emocional y social gracias al apoyo global.


#### Impacto Real

**DreamChain no es solo una red; es un motor de cambio social.**  
Une a soñadores y aliados en una colaboración global sin precedentes, ayudando a que incluso los sueños más humildes brillen como ejemplos de lo que la humanidad puede lograr cuando trabaja junta.

---------------------------------------------------------------------------------------------------------------------------------

## Cómo Funciona

Aquí tienes una descripción paso a paso de las funcionalidades clave:

#### Registro del Sueño
1. El usuario (soñador) crea una cuenta en la plataforma.
2. Publica su sueño, detallando:
   - **Nombre del sueño**: Ejemplo: "Construir una casa segura para mi familia".
   - **Descripción**: Explica por qué este sueño es importante.
   - **Metas específicas**: Desglose de los pasos necesarios para lograrlo.
   - **Recursos necesarios**: Financieros, mentoría o ambos.
3. El sueño se registra como un contrato inteligente en blockchain, asignándole un **ID único** y una dirección hexadecimal para su seguimiento transparente.


#### Apoyo Transparente
1. **Microdonaciones**:
   - Cualquier usuario puede realizar contribuciones financieras, por pequeñas que sean, directamente al contrato inteligente del sueño.
   - Las donaciones se rastrean en tiempo real en la blockchain.
2. **Mentoría**:
   - Expertos en áreas relacionadas con el sueño pueden ofrecer consejos personalizados.
   - El soñador puede elegir mentores con base en su experiencia.


#### Seguimiento del Progreso
1. El soñador actualiza el estado de su sueño en la plataforma:
   - **Tareas completadas**.
   - **Metas alcanzadas**.
2. Los mentores y donantes pueden visualizar el avance mediante:
   - Un panel de progreso en tiempo real.
   - Historial de actualizaciones almacenado en la blockchain.


#### Recompensas Simbólicas
1. **Agradecimientos**:  
   Los soñadores otorgan un porcentaje simbólico de los beneficios futuros del sueño realizado (si corresponde).
2. **Validación social**:  
   Los contribuyentes y mentores reciben reconocimiento público (opcional).


#### Caso de Éxito
Al cumplir sus metas, los soñadores comparten su éxito en la plataforma mediante:
- Fotos o videos.
- Historias inspiradoras que motivan a otros a unirse.


#### Diagrama de Flujo

[Inicio] -->
		 --> [Registro del Sueño]
		 --> [Publicación en Blockchain]
		 --> [Contribuciones: Microdonaciones / Mentoría]
		 --> [Seguimiento del Progreso]
		 --> [Sueño Cumplido]

---

## Enlace al Demo

Mira nuestro proyecto en acción: [YouTube - DreamChain Demo](https://www.youtube.com/watch?v=vGkhYBmGTvo)

---

## Instalación y Ejecución

### Requisitos

- Brew (Mac) / Chocolatey (Windows)
- Docker (Docker Desktop)
- rust, cargo y rustup
- LLVM (con wasm-ld): Disponible desde la versión 15 (`llvm@15`)

### Verificar si tenemos `wasm-strip` instalado

Si no, podemos instalarlo con `brew install wabt`

### Instalando Cargo Stylus

- fork / git clone de este repositorio
- `git submodule update --init --recursive`
- `cargo install cargo-stylus`
- `rustup target add wasm32-unknown-unknown` (**opcional**, solventa un error de target wasm32 not found al hacer make)

### Descargar dependencias

- Descargar Node js y NPM
- `npm install`

### Validar entorno de desarollo

- `make` para generar el archivo contract.wasm
- `cargo stylus check --wasm-file ./contract.wasm -e https://sepolia-rollup.arbitrum.io/rpc` (si tenemos output en verde estamos listos 🚀🚀)

### Iniciar servidor

`npm run dev`

---

## **Contribuidores y Agradecimientos**

#### **Contribuidores**
Este proyecto no habría sido posible sin la dedicación y el esfuerzo de los siguientes miembros del equipo, quienes han trabajado incansablemente para hacer de **DreamChain** una realidad:

- **Alejandro Rodríguez Mora** - Back-end Programmer
- **Alex Sebastián Mejía** - Blockchain Developer Back-end
- **Álvaro Morales** - Blockchain Developer Back-end
- **Miguel Ángel Avilés** - Team Leader & Front-end Programmer

Cada uno de nosotros ha aportado sus conocimientos, habilidades y creatividad para diseñar una plataforma innovadora que busca transformar los sueños en colaboraciones globales.

#### **Agradecimientos**
Queremos expresar nuestra más profunda gratitud a todas las personas que nos han ayudado a lo largo del desarrollo de este proyecto:

- **A los organizadores del Hackathon**: Gracias por brindarnos la oportunidad de participar en este evento y por crear un espacio donde la innovación y la colaboración florecen. Vuestra planificación y apoyo han sido fundamentales para el éxito de este proyecto.

- **A nuestros compañeros participantes**: Compartir este Hackathon con tantas personas talentosas ha sido una experiencia enriquecedora. Sus consejos, ideas y espíritu colaborativo nos inspiraron a superar los retos que encontramos en el camino.

- **A los miembros del Campus 42 Madrid**: Desde el comienzo, los miembros del campus nos han guiado con paciencia y sabiduría. Su enseñanza y enfoque basado en la colaboración nos han proporcionado las herramientas necesarias para conceptualizar y construir DreamChain. Sin su apoyo constante, este proyecto no habría sido posible.

#### **Nuestro Compromiso**
**DreamChain** es el resultado de un esfuerzo colectivo. Este proyecto no solo representa nuestro trabajo, sino también la colaboración, el aprendizaje y el espíritu de comunidad que se vive en el Hackathon y en Campus 42. A todos los que nos han ayudado directa o indirectamente: **GRACIAS** por formar parte. ¡Este logro es tan vuestro como nuestro!
