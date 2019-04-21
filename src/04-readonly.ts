// Write article for this

interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 42,
  name: "Marius"
};

user.id++;
user.name = "Keerati";

class UserC {
  constructor(public readonly id: number, public name: string) {}
}

const userc = new UserC(123, "Keerati");

userc.id++;

const weekdays: ReadonlyArray<string> = ["Sunday", "Monday", "Tuesday"];
weekdays[0] = "EIEI";
