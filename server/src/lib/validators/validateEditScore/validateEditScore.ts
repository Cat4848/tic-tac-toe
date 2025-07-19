import { object, ObjectSchema, number } from "yup";

interface EditScorePayload {
  player_id: number;
  score: number;
}

const schema: ObjectSchema<EditScorePayload> = object({
  player_id: number().required("Player ID is required"),
  score: number().required("Player score is required")
});

export const editScorePayloadValidation = async (reqBody: any) => {
  reqBody.player_id = Number(reqBody.player_id);
  reqBody.score = Number(reqBody.score);
  const editScorePayload: EditScorePayload = await schema.validate(reqBody, {
    strict: true
  });
  return editScorePayload;
};
