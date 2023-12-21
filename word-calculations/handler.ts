import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { filterWordsByType } from "./src/filter-word-by-type";
import { dictionary } from "./src/dictionary";

export const filterWordsByTypeHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body || "[]") as { inputWords: string[] };
  const result = filterWordsByType(body.inputWords, dictionary);

  return {
    statusCode: 200,
    body: JSON.stringify(result, null, 2),
  };
};
