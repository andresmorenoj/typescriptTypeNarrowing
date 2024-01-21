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
