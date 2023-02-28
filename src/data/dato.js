export const horario = [
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
];
export const boleta = [
  {
    id: 1,
    nivel: "1",
    sigla: "inf110",
    materia: "introduccion a la informatica",
    cantidadGrupos: 10,
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
        ],
        horario2: ["Lun 07:00 - 08:30", "Mi 07:00 - 08:30", "Vi 07:00 - 08:30"],
      },
    ],
  },
];

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
    cantidadGrupos: 10,
    levantamiento: false,
    color: ["4dcf48", "e8e10c", ""],
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
      {
        id: 2,
        cuposDisponibles: 30,
        grupo: "SB",
        docente: "ZUNA VILLAGOMEZ RICARDO",
        horario: [
          {
            id: 1,
            text: "inf110-SB",
            start: "2023-02-25T10:00:00",
            end: "2023-02-25T11:30:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-SB",
            start: "2023-02-25T10:00:00",
            end: "2023-02-25T11:30:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-SB",
            start: "2023-02-25T10:00:00",
            end: "2023-02-25T11:30:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 10:00 - 11:30", "Mi 10:00 - 11:30", "Vi 10:00 - 11:30"],
      },
      {
        id: 3,
        cuposDisponibles: 40,
        grupo: "Z3",
        docente: "ZUNA VILLAGOMEZ RICARDO",
        horario: [
          {
            id: 1,
            text: "inf110-Z3",
            start: "2023-02-25T15:15:00",
            end: "2023-02-25T16:45:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-Z3",
            start: "2023-02-25T15:15:00",
            end: "2023-02-25T16:45:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-Z3",
            start: "2023-02-25T15:15:00",
            end: "2023-02-25T16:45:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 15:15 - 16:45", "Mi 15:15 - 16:45", "Vi 15:15 - 16:45"],
      },
      {
        id: 4,
        cuposDisponibles: 35,
        grupo: "SC",
        docente: "MOLLO MAMANI ALBERTO",
        horario: [
          {
            id: 1,
            text: "inf110-SC",
            start: "2023-02-25T19:45:00",
            end: "2023-02-25T21:15:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-SC",
            start: "2023-02-25T19:45:00",
            end: "2023-02-25T21:15:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-SC",
            start: "2023-02-25T19:45:00",
            end: "2023-02-25T21:15:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 19:45 - 21:15", "Mi 19:45 - 21:15", "Vi 19:45 - 21:15"],
      },
      {
        id: 5,
        cuposDisponibles: 35,
        grupo: "SD",
        docente: "MOLLO MAMANI ALBERTO",
        horario: [
          {
            id: 1,
            text: "inf110-SD",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T20:30:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-SD",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T20:30:00",
            resource: "3",
          },
        ],
        horario2: ["Ma 18:15 - 20:30", "Ju 18:15 - 20:30"],
      },
      {
        id: 6,
        cuposDisponibles: 35,
        grupo: "Z5",
        docente: "MOLLO MAMANI ALBERTO",
        horario: [
          {
            id: 1,
            text: "inf110-Z5",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T19:45:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-Z5",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T19:45:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-Z5",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T19:45:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 18:15 - 19:45", "Mi 18:15 - 19:45", "Vi 18:15 - 19:45"],
      },
      {
        id: 7,
        cuposDisponibles: 30,
        grupo: "SF",
        docente: "GARZON CUELLAR ANGELICA",
        horario: [
          {
            id: 1,
            text: "inf110-SF",
            start: "2023-02-25T08:30:00",
            end: "2023-02-25T10:00:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-SF",
            start: "2023-02-25T08:30:00",
            end: "2023-02-25T10:00:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-SF",
            start: "2023-02-25T08:30:00",
            end: "2023-02-25T10:00:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 08:30 - 10:00", "Mi 08:30 - 10:00", "Vi 08:30 - 10:00"],
      },
      {
        id: 8,
        cuposDisponibles: 10,
        grupo: "Z2",
        docente: "GARZON CUELLAR ANGELICA",
        horario: [
          {
            id: 1,
            text: "inf110-Z2",
            start: "2023-02-25T10:00:00",
            end: "2023-02-25T11:30:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-Z2",
            start: "2023-02-25T10:00:00",
            end: "2023-02-25T11:30:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-Z2",
            start: "2023-02-25T10:00:00",
            end: "2023-02-25T11:30:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 10:00 - 11:30", "Mi 10:00 - 11:30", "Vi 10:00 - 11:30"],
      },
      {
        id: 9,
        cuposDisponibles: 35,
        grupo: "SZ",
        docente: "CONTRERAS VILLEGAS JUAN CARLOS",
        horario: [
          {
            id: 1,
            text: "inf110-SZ",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T08:30:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-SZ",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T08:30:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-SZ",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T08:30:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 07:00 - 08:30", "Mi 07:00 - 08:30", "Vi 07:00 - 08:30"],
      },
      {
        id: 10,
        cuposDisponibles: 35,
        grupo: "Z4",
        docente: "CONTRERAS VILLEGAS JUAN CARLOS",
        horario: [
          {
            id: 1,
            text: "inf110-Z4",
            start: "2023-02-25T13:45:00",
            end: "2023-02-25T15:15:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf110-Z4",
            start: "2023-02-25T13:45:00",
            end: "2023-02-25T15:15:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf110-Z4",
            start: "2023-02-25T13:45:00",
            end: "2023-02-25T15:15:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 13:45 - 15:15", "Mi 13:45 - 15:15", "Vi 13:45 - 15:15"],
      },
    ],
  },
  //programacion1------------------------------------------------------
  {
    id: 2,
    nivel: "2",
    sigla: "inf120",
    materia: "programacion l",
    cantidadGrupos: 4,
    levantamiento: true,
    color: ["e39494", "e8e10c", ""],
    grupos: [
      {
        id: 1,
        cuposDisponibles: 30,
        grupo: "SG",
        docente: "López Winnipeg Mario Milton",
        horario: [
          {
            id: 1,
            text: "inf120-SG",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T09:15:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf120-SG",
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
        docente: "BALCAZAR VEIZAGA EVANS",
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
      {
        id: 3,
        cuposDisponibles: 30,
        grupo: "SH",
        docente: "PEINADO PEREIRA MIGUEL JESUS",
        horario: [
          {
            id: 1,
            text: "inf120-SH",
            start: "2023-02-25T14:30:00",
            end: "2023-02-25T16:45:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf120-SH",
            start: "2023-02-25T14:30:00",
            end: "2023-02-25T16:45:00",
            resource: "4",
          },
        ],
        horario2: ["Ma 14:30 - 16:45", "Ju 14:30 - 16:45"],
      },
      {
        id: 4,
        cuposDisponibles: 30,
        grupo: "SC",
        docente: "PEINADO PEREIRA MIGUEL JESUS",
        horario: [
          {
            id: 1,
            text: "inf120-SC",
            start: "2023-02-25T16:45:00",
            end: "2023-02-25T18:15:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf120-SC",
            start: "2023-02-25T16:45:00",
            end: "2023-02-25T18:15:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf120-SC",
            start: "2023-02-25T16:45:00",
            end: "2023-02-25T18:15:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 16:45 - 18:15", "Mi 16:45 - 18:15", "Vi 16:45 - 18:15"],
      },
    ],
  },
  //programacion ll---------------------
  {
    id: 3,
    nivel: "3",
    sigla: "inf210",
    materia: "programacion ll",
    cantidadGrupos: 5,
    levantamiento: false,
    // color: "F1F7B5",
    color: ["4dcf48", "e8e10c", ""],
    grupos: [
      {
        id: 1,
        cuposDisponibles: 30,
        grupo: "SD",
        docente: "LOPEZ NEGRETTY MARY DUNNIA",
        horario: [
          {
            id: 1,
            text: "inf210-SD",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T20:30:00",
            resource: "1",
          },
          {
            id: 2,
            text: "inf210-SD",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T20:30:00",
            resource: "3",
          },
          {
            id: 3,
            text: "inf210-SD",
            start: "2023-02-25T18:15:00",
            end: "2023-02-25T20:30:00",
            resource: "5",
          },
        ],
        horario2: ["Lun 18:15 - 20:30", "Mi 18:15 - 20:30", "Vi 18:15 - 20:30"],
      },
      {
        id: 2,
        cuposDisponibles: 25,
        grupo: "SC",
        docente: "CONTRERAS VILLEGAS JUAN CARLOS",
        horario: [
          {
            id: 1,
            text: "inf210-SC",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T09:15:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf210-SC",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T09:15:00",
            resource: "4",
          },
        ],
        horario2: ["Ma 07:00 - 09:15", "Ju 07:00 - 09:15"],
      },
      {
        id: 3,
        cuposDisponibles: 20,
        grupo: "SB",
        docente: "CONTRERAS VILLEGAS JUAN CARLOS",
        horario: [
          {
            id: 1,
            text: "inf210-SB",
            start: "2023-02-25T09:15:00",
            end: "2023-02-25T11:30:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf210-SB",
            start: "2023-02-25T09:15:00",
            end: "2023-02-25T11:30:00",
            resource: "4",
          },
        ],
        horario2: ["Ma 09:15 - 11:30", "Ju 09:15 - 11:30"],
      },
      {
        id: 4,
        cuposDisponibles: 15,
        grupo: "SA",
        docente: "CONTRERAS VILLEGAS JUAN CARLOS",
        horario: [
          {
            id: 1,
            text: "inf210-SA",
            start: "2023-02-25T13:45:00",
            end: "2023-02-25T16:00:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf210-SA",
            start: "2023-02-25T13:45:00",
            end: "2023-02-25T16:00:00",
            resource: "4",
          },
        ],
        horario2: ["Ma 13:45 - 16:00", "Ju 13:45 - 16:00"],
      },
      {
        id: 5,
        cuposDisponibles: 10,
        grupo: "MV",
        docente: "CONTRERAS VILLEGAS JUAN CARLOS",
        horario: [
          {
            id: 1,
            text: "inf210-MV",
            start: "2023-02-25T11:30:00",
            end: "2023-02-25T13:45:00",
            resource: "2",
          },
          {
            id: 2,
            text: "inf210-MV",
            start: "2023-02-25T11:30:00",
            end: "2023-02-25T13:45:00",
            resource: "4",
          },
        ],
        horario2: ["Ma 11:30 - 13:45", "Ju 11:30 - 13:45"],
      },
    ],
  },
];
