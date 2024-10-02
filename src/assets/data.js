 const movies = JSON.parse(`[
	{
		"id": 1,
		"day":20241022,
		"palabraAdivinar": "JENNIFERS BODY",
		"resultado": {
			"gana": {
				"titulo": "Jennifer's Body",
				"anio": 2010,
				"director": "Karyn Kusama",
				"descripcion": "Jennifer es una animadora poseída por un demonio que se alimenta de los chicos de su instituto...",
				"mensaje": "🎉 ¡Felicidades! Jennifer no pudo atraparte, buena suerte que no estabas en su lista de chicos. 😈 Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_jennifers_body.png"
			},
			"pierde": {
				"mensaje": "¡Oh no! Parece que no habrías sobrevivido a Jennifer... 🩸 ¡Inténtalo de nuevo, quizás la próxima vez te libres del demonio!",
				"imagen": "ruta/a/imagen_perder_jennifers_body.png"
			}
		}
	},
	{
		"id": 2,
		"day": 20241023,
		"palabraAdivinar": "CARRIE",
		"resultado": {
			"gana": {
				"titulo": "Carrie",
				"anio": 1976,
				"director": "Brian de Palma",
				"descripcion": "Cuenta la historia de Carrie White, una adolescente socialmente aislada que, después de ser brutalmente acosada...",
				"mensaje": "🎉 ¡Felicidades! Menos mal que no estabas en el baile de graduación... ¡Carrie no te habría dejado salir tan fácilmente! 💥 Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_carrie.png"
			},
			"pierde": {
				"mensaje": "¡Oh no! Carrie te habría lanzado por los aires. 🎒 Parece que tu destino habría sido igual de oscuro que el de sus compañeros de clase.",
				"imagen": "ruta/a/imagen_perder_carrie.png"
			}
		}
	},
	{
		"id": 3,
		"day": 20241024,
		"palabraAdivinar": "EL SILENCIO DE LOS CORDEROS",
		"resultado": {
			"gana": {
				"titulo": "El silencio de los corderos",
				"anio": 1991,
				"director": "Jonathan Demme",
				"descripcion": "Clarice Starling es una joven agente del FBI que busca atrapar al asesino en serie Buffalo Bill con la ayuda de Hannibal Lecter...",
				"mensaje": "🎉 ¡Qué alivio que Hannibal Lecter solo esté detrás de la pantalla y no en tu salón! 👁️🍽️ Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_silencio_de_los_corderos.png"
			},
		"pierde": {
				"mensaje": "Oh no... parece que Hannibal Lecter te habría invitado a cenar. ¡Intenta escapar la próxima vez! 🍽️😨",
				"imagen": "ruta/a/imagen_perder_silencio_de_los_corderos.png"
			}
		}
	},
	{
		"id": 4,
		"day": 20241025,
		"palabraAdivinar": "ALIEN",
		"resultado": {
			"gana": {
				"titulo": "Alien",
				"anio": 1979,
				"director": "Ridley Scott",
				"descripcion": "El film sigue a la tripulación de la nave espacial Nostromo, que se enfrenta a un letal alienígena...",
				"mensaje": "🎉 Ripley estaría orgullosa de ti... ¡Has logrado esquivar al xenomorfo esta vez! 👽🚀 Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_alien.png"
			},
			"pierde": {
				"mensaje": "¡El xenomorfo te ha encontrado! No todos pueden ser tan afortunados como Ripley... ¡Vuelve a intentarlo! 🛸👽",
				"imagen": "ruta/a/imagen_perder_alien.png"
			}
		}
	},
	{
		"id": 5,
		"day": 20241026,
		"palabraAdivinar": "JOVENES Y BRUJAS",
		"resultado": {
			"gana": {
				"titulo": "Jóvenes y brujas",
				"anio": 1996,
				"director": "Andrew Fleming",
				"descripcion": "Un grupo de adolescentes marginadas descubre el poder de la brujería...",
				"mensaje": "🎉 ¡Cuidado! A lo mejor las chicas del aquelarre te reclutan después de esto... 🔮✨ Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_jovenes_y_brujas.png"
			},
			"pierde": {
				"mensaje": "Las brujas te han lanzado un hechizo... ¡Pero no te rindas! Intenta de nuevo y vence al aquelarre. 🧙‍♀️",
				"imagen": "ruta/a/imagen_perder_jovenes_y_brujas.png"
			}
		}
	},
	{
		"id": 6,
		"day": 20241027,
		"palabraAdivinar": "LA MUERTE OS SIENTA TAN BIEN",
		"resultado": {
			"gana": {
				"titulo": "La muerte os sienta tan bien",
				"anio": 1992,
				"director": "Robert Zemeckis",
				"descripcion": "Comedia negra que sigue a Madeline y Helen, dos mujeres obsesionadas con la juventud y la belleza...",
				"mensaje": "🎉 ¡Felicidades! Parece que Madeline y Helen no lograron arrastrarte en su obsesión por la juventud eterna... ¡Tú sí que sabes envejecer con estilo! 💄🧪 Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_la_muerte_os_sienta_tan_bien.png"
			},
			"pierde": {
				"mensaje": "¡Oh no! Te habrías unido a la inmortalidad de Madeline y Helen... ¡Pero a un alto precio! Intenta de nuevo antes de que la poción se acabe. 🧪👵",
				"imagen": "ruta/a/imagen_perder_la_muerte_os_sienta_tan_bien.png"
			}
		}
	},
	{
		"id": 7,
		"day": 20241028,
		"palabraAdivinar": "EL EXORCISTA",
		"resultado": {
			"gana": {
				"titulo": "El Exorcista",
				"anio": 1973,
				"director": "William Friedkin",
				"descripcion": "La película cuenta cómo Regan es poseída por un demonio, y el esfuerzo de su madre y dos sacerdotes por liberarla...",
				"mensaje": "🎉 ¡Felicidades! Has sobrevivido al terror del exorcismo... parece que Regan no pudo atraparte con sus demonios. 👹✝️ Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_el_exorcista.png"
			},
			"pierde": {
				"mensaje": "¡Oh no! El demonio de Regan te habría poseído... ¡mejor llama a un sacerdote para el próximo intento! 😈✝️",
				"imagen": "ruta/a/imagen_perder_el_exorcista.png"
			}
		}
	},
	{
		"id": 8,
		"day": 20241029,
		"palabraAdivinar": "REC",
		"resultado": {
			"gana": {
				"titulo": "REC",
				"anio": 2007,
				"director": "Paco Plaza",
				"descripcion": "Película en formato de metraje encontrado que sigue a un equipo de reporteros que se infiltran en un edificio de apartamentos en cuarentena...",
				"mensaje": "🎉 ¡Impresionante! Lograste sobrevivir al caos en cuarentena. Ángela estaría orgullosa de tu habilidad para escapar del horror. 📹🏃‍♀️ Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_rec.png"
			},
			"pierde": {
				"mensaje": "¡Oh no! Parece que te has quedado atrapado en el edificio... Intenta escapar la próxima vez antes de que te alcancen. 🏢😱",
				"imagen": "ruta/a/imagen_perder_rec.png"
			}
		}
	},
	{
		"id": 9,
		"day": 20241030,
		"palabraAdivinar": "HEREDITARY",
		"resultado": {
			"gana": {
				"titulo": "Hereditary",
				"anio": 2018,
				"director": "Ari Aster",
				"descripcion": "La familia Graham enfrenta una serie de tragedias tras la muerte de la matriarca, revelando oscuros secretos familiares...",
				"mensaje": "🎉 ¡Qué suerte! Has escapado de la maldición de Hereditary, y Annie no pudo llevarte con ella al otro lado. 🏠👻 Como recompensa, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_hereditary.png"
			},
			"pierde": {
				"mensaje": "¡Oh no! Parece que la maldición familiar te ha alcanzado... ¡Inténtalo de nuevo antes de que todo se desmorone! 🕯️👀",
				"imagen": "ruta/a/imagen_perder_hereditary.png"
			}
		}
	},
	{
		"id": 10,
		"day": 20241031,
		"palabraAdivinar": "MIDSOMMAR",
		"resultado": {
			"gana": {
				"titulo": "Midsommar",
				"anio": 2019,
				"director": "Ari Aster",
				"descripcion": "Dani es una joven que viaja con su novio y amigos a una remota aldea en Suecia para participar en un festival de verano...",
				"mensaje": "🎉 ¡Increíble! Has descubierto todos los secretos de Midsommar, y has logrado escapar antes de ser parte de sus rituales. 🌸🔥 Como recompensa final, tienes un 10% de descuento en nuestro servicio de portfolio*. ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror! *Oferta válida hasta el 1 de noviembre de 2024 con el código ASTRACODE.",
				"imagen": "ruta/a/imagen_ganar_midsommar.png"
			},
			"pierde": {
				"mensaje": "¡Oh no! Pareces haber caído en las manos del festival de Midsommar... ¡Intenta de nuevo para no formar parte de su próximo ritual! 🌻🔪 Gracias por participar en nuestros 10 días de terror. Te esperamos el próximo Halloween... ¡si te atreves a volver! 🎃",
				"imagen": "ruta/a/imagen_perder_midsommar.png"
			}
		}
	}
]`)

export default movies

