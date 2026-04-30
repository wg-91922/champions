import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

const FILE_PATH = "./src/data/clubs.json";

// ==============================
// FALLBACK (caso o JSON falhe)
// ==============================
const database: ClubModel[] = [
  {
    id: 1,
    name: "Real Madrid",
  },
  {
    id: 2,
    name: "Barcelona",
  },
  {
    id: 3,
    name: "Manchester City",
  },
];

// ==============================
// FIND ALL CLUBS
// ==============================
export const findAllClubs = async (): Promise<ClubModel[]> => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);

    return clubs;
  } catch (error) {
    console.error("Erro ao ler clubs.json, usando fallback:", error);

    return database;
  }
};