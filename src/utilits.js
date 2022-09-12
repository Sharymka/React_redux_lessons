import { robotMessageAction } from "./actions";

export function clearRobotMessage() {
  setTimeout(() => {
    robotMessageAction("");
  }, 3000);
}
