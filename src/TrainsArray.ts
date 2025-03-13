// ---------------------------------------------------
// TYPES

type Line = "RED" | "BLUE" | "GREEN"; // Type Union
type TrainName = "B1" | "B2" | "B3"; // Type Union

export type Train = {
  trainId: string;
  name: TrainName;
  passengers: number;
  isBoxCar?: boolean;
};

export type Station = {
  stationId: string; //
  stationName: string;
  line: Line | Line[];
};

export type Timetable = {
  id: string;
  stationId: string;
  trainId: string;
  passengers: number;
  timestamp?: Date;
};

/**
 * ID  |  TRAIN ID  |  STATION ID        |  TIMESTAMP
 * xxx |    B1      |  DIMOTIKO THEATRO  |   10:00am
 * xxx |    B1      |  PIREUS            |   10:05am
 * xxx |    B1      |  MANIATIKA         |   10:07am
 *
 *
 */

// ---------------------------------------------------

// ---------------------------------------------------
// LISTS

export const TRAINS: Train[] = [
  {
    trainId: "7f44c8e8-a648-4063-af5f-e9cbb2aebb48",
    name: "B1",
    passengers: 0,
  },
  {
    trainId: "b9409f68-fb81-466f-834b-c3383ca36b6c",
    name: "B2",
    passengers: 0,
  },
  {
    trainId: "440a777f-f847-4167-971b-bf31172e67fc",
    name: "B3",
    passengers: 0,
  },
];

export const blueLineStations: Station[] = [
  {
    stationId: "f754840f-2aa2-4d43-930a-debe6b801575",
    stationName: "DIMOTIKO THEATRO",
    line: "BLUE",
  },
  {
    stationId: "6468b9ea-2a3b-4daf-a7d5-fe2b4d0bfac1",
    stationName: "PIREUS",
    line: "BLUE",
  },
  {
    stationId: "251c66fd-d54c-4f93-9d2e-1b5b03f6f6e8",
    stationName: "MANIATIKA",
    line: "BLUE",
  },
  {
    stationId: "ba21f376-82e6-4538-bd38-bf308ef7cbec",
    stationName: "NIKAIA",
    line: "BLUE",
  },
  {
    stationId: "f9f10e56-4765-4e27-a000-eb90cdd6c831",
    stationName: "KORYDALLOS",
    line: "BLUE",
  },
  {
    stationId: "106325ec-d93b-49b1-bb8c-3c4c07611576",
    stationName: "AGIA BARBARA",
    line: "BLUE",
  },
  {
    stationId: "f0dd36f2-5326-4f88-8942-4281f6b5285b",
    stationName: "AGIA MARINA",
    line: "BLUE",
  },
  {
    stationId: "d11b293d-8774-4530-a82c-8e20643f3b03",
    stationName: "AIGALEO",
    line: "BLUE",
  },
  {
    stationId: "be3152c2-8c6e-4bb7-9397-927fcbc71f76",
    stationName: "ELEONAS",
    line: "BLUE",
  },
  {
    stationId: "979da8d9-7415-4fc3-bc9b-c3f92fc7a0f7",
    stationName: "KERAMEIKOS",
    line: "BLUE",
  },
  {
    stationId: "822e004f-8294-4d60-9e30-16f70cdedbc3",
    stationName: "MONASTIRAKI",
    line: ["BLUE", "GREEN"],
  },
  {
    stationId: "166c8b46-1258-4410-ab25-7b696994097d",
    stationName: "SYNTAGMA",
    line: ["BLUE", "RED"],
  },
  {
    stationId: "85e719b6-c414-444a-b7eb-68a8b7bf754b",
    stationName: "EVAGELISMOS",
    line: "BLUE",
  },
  {
    stationId: "6ad41c30-9fb9-4b7d-ad4f-3c6d74f601b0",
    stationName: "MEGARO MOUSIKIS",
    line: "BLUE",
  },
  {
    stationId: "2f6ff452-38cf-4b7a-b63f-78f8549ced1c",
    stationName: "ABELOKIPI",
    line: "BLUE",
  },
  {
    stationId: "2e44f237-8dd6-46c8-984a-0803fe30fe12",
    stationName: "PANORMOU",
    line: "BLUE",
  },
  {
    stationId: "75005663-7bce-48ce-a03d-e9b8053f100c",
    stationName: "KATEXAKI",
    line: "BLUE",
  },
  {
    stationId: "65b2a006-6316-42fc-a6db-b297c46cd813",
    stationName: "ETHNIKI AMINA",
    line: "BLUE",
  },
  {
    stationId: "b3aabaf8-92d7-41a2-857a-17dd4d847cdd",
    stationName: "XOLARGOS",
    line: "BLUE",
  },
  {
    stationId: "3535c234-e149-4b5c-803e-332d0cc1a205",
    stationName: "NOMISTAOKOPIO",
    line: "BLUE",
  },
  {
    stationId: "e6ff1652-5e33-4599-a94e-78b2136e9132",
    stationName: "AGIA PARASKEVI",
    line: "BLUE",
  },
  {
    stationId: "c08ec9f2-db86-4bf9-8804-15213015959d",
    stationName: "XALANDRI",
    line: "BLUE",
  },
  {
    stationId: "df5199b4-c51c-4dee-9101-7cfff4830bea",
    stationName: "DOUK. PLAKENTIAS",
    line: "BLUE",
  },
  {
    stationId: "2d9660a4-284d-47fe-9079-e682b369d469",
    stationName: "PALLINI",
    line: "BLUE",
  },
  {
    stationId: "fcba38e3-0230-40a5-a010-dc80ea0f42df",
    stationName: "PAIANIA",
    line: "BLUE",
  },
  {
    stationId: "ba4db2ca-4ef5-45b5-b90f-f48d9750ac5e",
    stationName: "KOROPI",
    line: "BLUE",
  },
  {
    stationId: "4225c097-e369-4c26-8f1d-246242a4c394",
    stationName: "AERODROMIO",
    line: "BLUE",
  },
];

export const timeTable: Timetable[] = [];
// ---------------------------------------------------
