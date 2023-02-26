



export const events = [
    {
      id: 1,
      text: "Event 1",
      start: "2023-02-25T10:30:00",
      end: "2023-02-25T13:00:00",
      resource: "1",
    },
    {
      id: 1,
      text: "Event 1",
      start: "2023-02-25T07:00:00",
      end: "2023-02-25T09:15:00",
      resource: "1",
    },
  ];


export const materias = [
    {
      id : 1,
      nivel: '1',
      sigla: "inf110",
      materia: "introduccion a la informatica",
      cantidadGrupos: 1,
      levantamiento: false,
      grupos : [
        {
            id: 1,
            cuposDisponibles: 30,
            grupo: "SA",
            docente: "López Winnipeg Mario Milton",
            horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
        },
      ],
    },
    {
      id : 2,
      nivel: '2',
      sigla: "inf120",
      materia: "programacion l",
      cantidadGrupos: 2,      
      levantamiento: false,
      grupos : [
        {
            id: 1,
            cuposDisponibles: 30,
            grupo: "SA",
            docente: "López Winnipeg Mario Milton",
            horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
        },
        {
            id: 2,
            cuposDisponibles: 30,
            grupo: "SA",
            docente: "López Winnipeg Mario Milton",
            horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
        },
      ],
    },
    {
      id : 3,
      nivel: '3',
      sigla: "inf210",
      materia: "programacion ll",
      cantidadGrupos: 3,      
      levantamiento: false,
      grupos : [
        {
            id: 1,
            cuposDisponibles: 30,
            grupo: "SA",
            docente: "López Winnipeg Mario Milton",
            horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
        },
        {
            id: 2,
            cuposDisponibles: 30,
            grupo: "SA",
            docente: "López Winnipeg Mario Milton",
            horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
        },
        {
            id: 3,
            cuposDisponibles: 30,
            grupo: "SA",
            docente: "López Winnipeg Mario Milton",
            horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
        },
      ],
    },

  ];
