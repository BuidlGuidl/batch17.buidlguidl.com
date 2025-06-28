import * as fs from "fs";
import * as path from "path";

// Reads the names of subdirectories within 'app/builders'

function getBuilderDirectoryNames(): string[] {
  const buildersDirPath = path.join(process.cwd(), "app", "builders");

  console.log(`Attempting to read directories from: ${buildersDirPath}`);

  try {
    // Check if the directory exists
    if (!fs.existsSync(buildersDirPath)) {
      console.warn(`Directory not found: ${buildersDirPath}. Returning empty array.`);
      return [];
    }

    // Read all files and directories
    const entries = fs.readdirSync(buildersDirPath);

    // Filter out only the directories
    const directoryNames = entries.filter(entry => {
      const entryPath = path.join(buildersDirPath, entry);
      return fs.statSync(entryPath).isDirectory();
    });

    return directoryNames;
  } catch (error) {
    console.error("Error reading builder directories:", error);
    return [];
  }
}

export { getBuilderDirectoryNames };
