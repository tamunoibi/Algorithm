function confirmEnding(str, target) {
  const end = str.slice(str.length - target.length, str.length);
  return end == target;
}

confirmEnding("Congratulation", "on");
           