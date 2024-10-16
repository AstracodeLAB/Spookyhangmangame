const movies = JSON.parse(`[
	{
		"id": 1,
		"day": 20241016,
		"movie": "JENNIFERS BODY",
		"title_win": "Jennifer's Body",
		"title_win_mobile": "En 'Jennifer's Body', una animadora poseída por un demonio se alimenta de los chicos de su instituto.",
		"year_win": 2010,
		"director_win": "Karyn Kusama",
		"description_win": "Jennifer es una animadora poseída por un demonio que se alimenta de los chicos de su instituto...",
		"message_win": "🎉 ¡Felicidades! Jennifer no pudo atraparte, buena suerte que no estabas en su lista de chicos.",
		"message_win_mobile": "🎉 ¡Te libraste de Jennifer! 😱",
		"image_win": "./1.Jennifer-win.jpg",
		"message_lose": "¡Oh no! Parece que no habrías sobrevivido a Jennifer... 🩸 ¡Inténtalo de nuevo, quizás la próxima vez te libres del demonio!",
		"image_lose": "ruta/a/image_perder_jennifers_body.png"
	},
	{
		"id": 2,
		"day": 20241023,
		"movie": "CARRIE",
		"title_win": "Carrie",
		"title_win_mobile": "En 'Carrie', una adolescente socialmente aislada desata su ira telequinética después de ser brutalmente acosada.",
		"year_win": 1976,
		"director_win": "Brian de Palma",
		"description_win": "Cuenta la historia de Carrie White, una adolescente socialmente aislada que, después de ser brutalmente acosada...",
		"message_win": "🎉 ¡Felicidades! Menos mal que no estabas en el baile de graduación... ¡Carrie no te habría dejado salir tan fácilmente! 💥",
		"message_win_mobile": "🎉 ¡Te salvaste del baile de Carrie! 💃",
		"image_win": "./2.Carrie-win.png",
		"message_lose": "¡Oh no! Carrie te habría lanzado por los aires. 🎒 Parece que tu destino habría sido igual de oscuro que el de sus compañeros de clase.",
		"image_lose": "ruta/a/image_perder_carrie.png"
	},
	{
		"id": 3,
		"day": 20241024,
		"movie": "EL SILENCIO DE LOS CORDEROS",
		"title_win": "El silencio de los corderos",
		"title_win_mobile": "En 'El silencio de los corderos', una joven agente del FBI colabora con Hannibal Lecter para atrapar a un asesino.",
		"year_win": 1991,
		"director_win": "Jonathan Demme",
		"description_win": "Clarice Starling es una joven agente del FBI que busca atrapar al asesino en serie Buffalo Bill con la ayuda de Hannibal Lecter...",
		"message_win": "🎉 ¡Qué alivio que Hannibal Lecter solo esté detrás de la pantalla y no en tu salón! 👁️🍽️ ",
		"message_win_mobile": "🎉 ¡Escapaste de Hannibal! 🍽️",
		"image_win": "./3.Silencio-win.jpg",
		"message_lose": "Oh no... parece que Hannibal Lecter te habría invitado a cenar. ¡Intenta escapar la próxima vez! 🍽️😨",
		"image_lose": "ruta/a/image_perder_silencio_de_los_corderos.png"
	},
	{
		"id": 4,
		"day": 20241025,
		"movie": "ALIEN",
		"title_win": "Alien",
		"title_win_mobile":"En 'Alien', la tripulación de la nave Nostromo lucha por sobrevivir contra un letal alienígena a bordo de su nave.",
		"year_win": 1979,
		"director_win": "Ridley Scott",
		"description_win": "El film sigue a la tripulación de la nave espacial Nostromo, que se enfrenta a un letal alienígena...",
		"message_win": "🎉 Ripley estaría orgullosa de ti... ¡Has logrado esquivar al xenomorfo esta vez! 👽🚀",
		"message_win_mobile": "🎉 ¡Esquivaste al Alien! 👽",
		"image_win": "./4.Alien-win.jpg",
		"message_lose": "¡El xenomorfo te ha encontrado! No todos pueden ser tan afortunados como Ripley... ¡Vuelve a intentarlo! 🛸👽",
		"image_lose": "ruta/a/image_perder_alien.png"
	},
	{
		"id": 5,
		"day": 20241026,
		"movie": "JOVENES Y BRUJAS",
		"title_win": "Jóvenes y brujas",
		"title_win_mobile": "En 'Jóvenes y brujas', un grupo de adolescentes marginadas descubre el poder de la brujería y sus consecuencias.",
		"year_win": 1996,
		"director_win": "Andrew Fleming",
		"description_win": "Un grupo de adolescentes marginadas descubre el poder de la brujería...",
		"message_win": "🎉 ¡Cuidado! A lo mejor las chicas del aquelarre te reclutan después de esto... 🔮✨ ",
		"message_win_mobile": "🎉 ¡Sobreviviste al aquelarre! ✨",
		"image_win": "./5.Jovenes-win.jpg",
		"message_lose": "Las brujas te han lanzado un hechizo... ¡Pero no te rindas! Intenta de nuevo y vence al aquelarre. 🧙‍♀️",
		"image_lose": "ruta/a/image_perder_jovenes_y_brujas.png"
	},
	{
		"id": 6,
		"day": 20241027,
		"movie": "LA MUERTE OS SIENTA TAN BIEN",
		"title_win": "La muerte os sienta tan bien",
		"title_win_mobile": "En 'La muerte os sienta tan bien', Helen y Madeline toman una poción de inmortalidad con consecuencias hilarantes.",
		"year_win": 1992,
		"director_win": "Robert Zemeckis",
		"description_win": "Comedia negra que sigue a Madeline y Helen, dos mujeres obsesionadas con la juventud y la belleza...",
		"message_win": "🎉 ¡Felicidades! Parece que Madeline y Helen no lograron arrastrarte en su obsesión por la juventud eterna... ¡Tú sí que sabes envejecer con estilo! 🧪 ",
		"message_win_mobile": "🎉 Madeline y Helen no han podido convencerte... 💄🧪",
		"image_win": "./6.Muerte-win.jpg",
		"message_lose": "¡Oh no! Te habrías unido a la inmortalidad de Madeline y Helen... ¡Pero a un alto precio! Intenta de nuevo antes de que la poción se acabe. 🧪👵",
		"image_lose": "ruta/a/image_perder_la_muerte_os_sienta_tan_bien.png"
	},
	{
		"id": 7,
		"day": 20241015,
		"movie": "EL EXORCISTA",
		"title_win": "El Exorcista",
		"title_win_mobile": "En 'El Exorcista', Regan es poseída por un demonio, y dos sacerdotes luchan por liberarla.",
		"year_win": 1973,
		"director_win": "William Friedkin",
		"description_win": "La película cuenta cómo Regan es poseída por un demonio, y el esfuerzo de su madre y dos sacerdotes por liberarla...",
		"message_win": "🎉 ¡Felicidades! Has sobrevivido al terror del exorcismo... parece que Regan no pudo atraparte con sus demonios. 👹✝️ ",
		"message_win_mobile": "🎉 ¡Sobreviviste al exorcismo! ✝️",
		"image_win": "./7.Exorcista-win.jpg",
		"message_lose": "¡Oh no! El demonio de Regan te habría poseído... ¡mejor llama a un sacerdote para el próximo intento! 😈✝️",
		"image_lose": "ruta/a/image_perder_el_exorcista.png"
	},
	{
		"id": 8,
		"day": 20241029,
		"movie": "REC",
		"title_win": "REC",
		"title_win_mobile": "En 'REC', un equipo de reporteros se infiltra en un edificio en cuarentena, enfrentándose a horrores sobrenaturales.",
		"year_win": 2007,
		"director_win": "Paco Plaza",
		"description_win": "Película en formato de metraje encontrado que sigue a un equipo de reporteros que se infiltran en un edificio de apartamentos en cuarentena...",
		"message_win": "🎉 ¡Impresionante! Lograste sobrevivir al caos en cuarentena. Ángela estaría orgullosa de tu habilidad para escapar del horror. 📹🏃‍♀️",
		"message_win_mobile": "🎉 ¡Escapaste del caos! 🏃‍♀️",
		"image_win": "./8.Rec-win.jpg",
		"message_lose": "¡Oh no! Parece que te has quedado atrapado en el edificio... Intenta escapar la próxima vez antes de que te alcancen. 🏢😱",
		"image_lose": "ruta/a/image_perder_rec.png"
	},
	{
		"id": 9,
		"day": 20241016,
		"movie": "HEREDITARY",
		"title_win": "Hereditary",
		"title_win_mobile": "En 'Hereditary', la familia Graham enfrenta tragedias que revelan oscuros secretos tras la muerte de la matriarca.",
		"year_win": 2018,
		"director_win": "Ari Aster",
		"description_win": "La familia Graham enfrenta una serie de tragedias tras la muerte de la matriarca, revelando oscuros secretos familiares...",
		"message_win": "🎉 ¡Qué suerte que no heredaste los oscuros secretos de la familia Graham! 🔥👻",
		"message_win_mobile": "🎉 ¡Esquivaste el destino de los Graham! 👻",
		"image_win": "./9.Hereditary-win.webp",
		"message_lose": "¡Oh no! Te has convertido en parte de los secretos oscuros de la familia Graham... ¡intenta salir antes de que sea tarde! 🔥👻",
		"image_lose": "ruta/a/image_perder_hereditary.png"
	},
	{
	"id": 10,
	"day": 20241031,
	"movie": "MIDSOMMAR",
	"title_win": "Midsommar",
	"title_win_mobile": "En 'Midsommar', Dani y sus amigos se adentran en un festival sueco que oculta oscuros rituales paganos.",
	"year_win": 2019,
	"director_win": "Ari Aster",
	"description_win": "Una pareja estadounidense se une a un festival sueco que solo ocurre cada 90 años, descubriendo que los rituales paganos esconden un oscuro secreto...",
	"message_win": "🎉 ¡Felicidades! Has logrado escapar del festival de Midsommar antes de que las flores te atraparan... 🌸🔥",
	"message_win_mobile": "🎉 ¡Escapaste del festival de Midsommar! 🌸",
	"image_win": "./10.Midsommar-win.png",
	"message_lose": "Oh no... parece que te han atrapado en el círculo de flores del festival. ¡Intenta salir antes de que te conviertan en parte de su ritual! 🌼🔥",
	"image_lose": "ruta/a/image_perder_midsommar.png"
}

]`);

export default movies;
