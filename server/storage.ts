import { type InsertSavedLook, type SavedLook } from "@shared/schema";

export interface IStorage {
  getLooks(): Promise<SavedLook[]>;
  createLook(look: InsertSavedLook): Promise<SavedLook>;
  deleteLook(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private looks: Map<number, SavedLook>;
  private currentId: number;

  constructor() {
    this.looks = new Map();
    this.currentId = 1;
  }

  async getLooks(): Promise<SavedLook[]> {
    return Array.from(this.looks.values());
  }

  async createLook(look: InsertSavedLook): Promise<SavedLook> {
    const id = this.currentId++;
    const newLook: SavedLook = {
      ...look,
      id,
      createdAt: new Date(),
    };
    this.looks.set(id, newLook);
    return newLook;
  }

  async deleteLook(id: number): Promise<void> {
    this.looks.delete(id);
  }
}

export const storage = new MemStorage();
