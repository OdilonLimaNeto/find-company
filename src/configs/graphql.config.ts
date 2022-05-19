import { GqlModuleOptions } from "@nestjs/graphql";
import { isDevelopment } from "@/consts/envs";
const graphqlConfig: GqlModuleOptions = {
  autoSchemaFile: true,
  debug: isDevelopment,
  context: ({ req }) => ({ req }),
};
export = graphqlConfig;
