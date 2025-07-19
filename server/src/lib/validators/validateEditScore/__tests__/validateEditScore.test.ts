import { ValidationError } from "yup";
import { editScorePayloadValidation } from "../validateEditScore";

test("if it passes with correct payload", async () => {
  expect.assertions(1);
  const reqBody = {
    player_id: 1,
    score: 1
  };
  const mockWrapper = jest.fn(
    async () => await editScorePayloadValidation(reqBody)
  );
  expect(mockWrapper).not.toThrow();
});

test("if it fails with empty payload", async () => {
  expect.assertions(1);
  const reqBody = {};
  try {
    await editScorePayloadValidation(reqBody);
  } catch (e) {
    expect(e).toBeInstanceOf(ValidationError);
  }
});

test("if it fails with missing score prop", async () => {
  expect.assertions(1);
  const reqBody = { player_id: 1 };
  try {
    await editScorePayloadValidation(reqBody);
  } catch (e) {
    expect(e).toBeInstanceOf(ValidationError);
  }
});

test("if it fails with missing player_id prop", async () => {
  expect.assertions(1);
  const reqBody = { score: 1 };
  try {
    await editScorePayloadValidation(reqBody);
  } catch (e) {
    expect(e).toBeInstanceOf(ValidationError);
  }
});

test("if it fails with wrong player_id prop type", async () => {
  expect.assertions(1);
  const reqBody = { player_id: new Set(), score: 1 };
  try {
    await editScorePayloadValidation(reqBody);
  } catch (e) {
    expect(e).toBeInstanceOf(ValidationError);
  }
});

test("if it fails with wrong score prop type", async () => {
  expect.assertions(1);
  const reqBody = { player_id: 1, score: new Map() };
  try {
    await editScorePayloadValidation(reqBody);
  } catch (e) {
    expect(e).toBeInstanceOf(ValidationError);
  }
});

test("if it fails with wrong player_id and score props type", async () => {
  expect.assertions(1);
  const reqBody = { player_id: false, score: new Map() };
  try {
    await editScorePayloadValidation(reqBody);
  } catch (e) {
    expect(e).toBeInstanceOf(ValidationError);
  }
});
