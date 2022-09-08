export default function wait(time = 2000) {
  return new Promise((res) => {
    setTimeout(res, time);
  });
}
