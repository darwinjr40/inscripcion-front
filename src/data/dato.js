export const horario = [];

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
    id: 1,
    nivel: "1",
    sigla: "inf110",
    materia: "introduccion a la informatica",
    cantidadGrupos: 1,
    levantamiento: false,
    grupos: [
      {
        id: 1,
        cuposDisponibles: 30,
        grupo: "SA",
        docente: "López Winnipeg Mario Milton",
        horario: [
          {
            id: 1,
            text: "inf110-SA",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T08:30:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-SA",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T08:30:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-SA",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T08:30:00",
            resource: "5",
          },
          /* "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30", */
        ],
        horario2: ["Lun 07:00 - 08:30", "Mi 07:00 - 08:30", "Vi 07:00 - 08:30"],
      },
    ],
  },
  {
    id: 2,
    nivel: "2",
    sigla: "inf120",
    materia: "programacion l",
    cantidadGrupos: 2,
    levantamiento: false,
    grupos: [
      {
        id: 1,
        cuposDisponibles: 30,
        grupo: "SA",
        docente: "López Winnipeg Mario Milton",
        horario: [
          {
            id: 1,
            text: "inf120-SA",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T09:15:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf120-SA",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T09:15:00",
            resource: "4",
          },
        ],
        horario2: ["Ma 07:00 - 09:15", "Ju 07:00 - 09:15"],
      },
      {
        id: 2,
        cuposDisponibles: 30,
        grupo: "SA",
        docente: "López Winnipeg Mario Milton",
        horario: [
          {
            id: 1,
            text: "inf120-SA",
            start: "2023-02-25T12:00:00",
            end: "2023-02-25T14:15:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf120-SA",
            start: "2023-02-25T12:00:00",
            end: "2023-02-25T14:15:00",
            resource: "4",
          },
        ],
        horario2: ["Ma 12:00 - 14:15", "Ju 12:00 - 14:15"],
      },
    ],
  },
  /* {
    id: 3,
    nivel: "3",
    sigla: "inf210",
    materia: "programacion ll",
    cantidadGrupos: 3,
    levantamiento: false,
    grupos: [
      {
        id: 1,
        cuposDisponibles: 30,
        grupo: "SA",
        docente: "López Winnipeg Mario Milton",
        horario: [
          "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30",
        ],
      },
      {
        id: 2,
        cuposDisponibles: 30,
        grupo: "SA",
        docente: "López Winnipeg Mario Milton",
        horario: [
          "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30",
        ],
      },
      {
        id: 3,
        cuposDisponibles: 30,
        grupo: "SA",
        docente: "López Winnipeg Mario Milton",
        horario: [
          "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30",
          "Lun 07:00 - 08:30",
        ],
      },
    ],
  }, */
];
