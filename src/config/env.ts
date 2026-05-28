import "dotenv/config";
import envSchema from "../schemas/env";

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("\x1b[31m[ERROR] Error in environment configuration\x1b[0m");
  const issues = result.error.issues;
  const errors = issues.map((err, index) =>
    index !== issues.length - 1
      ? `├── [${err.path}] ${err.message}`
      : `└── [${err.path}] ${err.message}`,
  );
  console.error(`\x1b[31m${errors.join("\n")}\x1b[0m`);
  process.exit(1);
}

const env = result.data;
export default env;
