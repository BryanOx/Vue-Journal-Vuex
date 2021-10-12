export interface Entry {
  id: number;
  date: string;
  text: string;
  picture: null | string;
}

export interface JournalStore {
  isLoading: boolean;
  entries: Entry[];
}

export default (): JournalStore => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text:
        "Exercitation enim ut laboris duis occaecat officia. Reprehenderit exercitation mollit magna dolor aliqua duis nisi. Laborum commodo voluptate duis nisi officia laborum nostrud ullamco. Fugiat aliquip culpa sunt fugiat aliqua in proident excepteur eiusmod proident culpa commodo dolor. Duis et proident sit amet.",
      picture: null
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text:
        "Dolor consequat quis non duis cupidatat laborum duis proident officia laborum. Lorem id non laborum labore et cillum. Fugiat dolore sunt labore nostrud Lorem labore cillum irure. Laborum labore sint fugiat in incididunt non aliquip deserunt dolor. Officia voluptate id cillum commodo sit exercitation officia duis magna. Anim consequat qui laborum cupidatat veniam incididunt incididunt irure laboris in eu mollit est.",
      picture: null
    },
    {
      id: new Date().getTime() + 4000,
      date: new Date().toDateString(),
      text:
        "Exercitation excepteur veniam irure magna irure officia cupidatat ad nulla incididunt. Nulla reprehenderit anim aliqua cillum. Consectetur labore officia laboris occaecat reprehenderit excepteur. Laboris veniam laboris nostrud culpa ex tempor fugiat tempor do non exercitation laborum.",
      picture: null
    },
  ]
});
