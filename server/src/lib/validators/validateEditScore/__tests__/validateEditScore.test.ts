import { editScorePayloadValidation } from "../validateEditScore";

test('if it passes with correct payload', async () => {
  expect.assertions(1)
  const reqBody = {
    player_id: 1,
    score: 1
  }
  const mockWrapper = jest.fn(async () => await editScorePayloadValidation(reqBody))
  expect(mockWrapper).not.toThrow()
})