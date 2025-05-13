import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // For this case, we don't need any API routes as this is a frontend-only portfolio
  // If needed, CRUD operations could be added here using the storage interface
  
  const httpServer = createServer(app);

  return httpServer;
}
