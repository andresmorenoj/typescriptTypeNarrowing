function triple(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(3);
  }

  return value * 3;
}

const printChars = (word?: string) => {
  if (word) {
    for (const char of word) {
      console.log(char);
    }
  } else {
    console.log("Error char");
  }
};

// EQUALITY NARROWING
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

someDemo(3, "3");
/* ****************** */

interface IMovie {
  title: string;
  duration: number;
}

interface ITVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getMedia(media: IMovie | ITVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }

  return media.duration;
}

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  }
}

// TYPE PREDICATES
interface ICat {
  name: string;
  numLives: number;
}

interface IDog {
  name: string;
  breed: string;
}

function isCat(animal: ICat | IDog): animal is ICat {
  return (animal as ICat).numLives !== undefined;
}

function makeNoise(animal: ICat | IDog): string {
  if (isCat(animal)) {
    return "Meow";
  }

  return "Bark";
}

/* ****************** */

// Discriminated Unions

interface IRooster {
  name: string;
  weight: number;
  age: number;
  kind: "Rooster";
}

interface ICow {
  name: string;
  weight: number;
  age: number;
  kind: "Cow";
}

interface IPig {
  name: string;
  weight: number;
  age: number;
  kind: "Pig";
}

type TFarmAnimal = IRooster | ICow | IPig;

function getFarmAnimalSound(animal: TFarmAnimal) {
  switch (animal.kind) {
    case "Rooster":
      return "Cockadooledoo!";
    case "Cow":
      return "Mooo!";
    case "Pig":
      return "Oink!";
    default:
      break;
  }
}
