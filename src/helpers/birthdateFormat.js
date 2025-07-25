export const birthdateFormat = (birthday) => {
  const [year, month, day] = birthday.split("-");
    return `${day}.${month}.${year}`;
}
