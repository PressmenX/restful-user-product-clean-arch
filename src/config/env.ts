import "dotenv/config";
import envSchema from "../schemas/env.schema";

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("[ERROR] Error in environment configuration ");
  const issues = result.error.issues;
  const errors = issues.map((err, index) =>
    index !== issues.length - 1
      ? `├── [${err.path}] ${err.message}`
      : `└── [${err.path}] ${err.message}`,
  );
  console.error(errors.join("\n"));
  process.exit(1);
}

const env = result.data;
export default env;
