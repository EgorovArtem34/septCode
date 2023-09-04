import avatar1 from "../src/assets/images/1.png";
import avatar2 from "../src/assets/images/2.png";
import avatar3 from "../src/assets/images/3.png";
import avatar4 from "../src/assets/images/4.png";
import avatar5 from "../src/assets/icons/emptyAvatar.svg";
import avatar6 from "../src/assets/images/6.png";
import avatar7 from "../src/assets/images/7.png";
import avatar8 from "../src/assets/images/8.png";
import avatar9 from "../src/assets/images/9.png";
import notesImg from "../src/assets/images/notes.png";
import blueCamera from "../src/assets/icons/consultation/blueCamera.svg";
import whiteCamera from "../src/assets/icons/consultation/whiteCamera.svg";
import personalVisit from "../src/assets/icons/consultation/personalVisit.svg";
import videoImage1 from "../src/assets/images/video/1.png";
import videoImage2 from "../src/assets/images/video/2.png";
import videoImage3 from "../src/assets/images/video/3.png";
import eventImage from "../src/assets/images/events/event.png";
import videoImage from "../src/assets/icons/events/camera.svg";
import calendarImage from "../src/assets/icons/events/calendar.svg";
import clockImage from "../src/assets/icons/events/clock.svg";

export const users = [
  {
    id: 1,
    name: "Кравцова Александра",
    image: avatar1,
    age: 26,
    gender: "жен",
    hasNewMessage: true,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 2,
    name: "Рожков Денис ",
    image: avatar2,
    age: 30,
    gender: "муж",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 3,
    name: "Кравцова Александра",
    image: avatar1,
    age: 28,
    gender: "жен",
    hasNewMessage: false,
    hasNotification: true,
    isChecked: false,
  },
  {
    id: 4,
    name: "Диброва Алевтина",
    image: avatar3,
    age: 22,
    gender: "жен",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 5,
    name: "Иванов Дмитрий",
    image: avatar4,
    age: 29,
    gender: "муж",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 6,
    name: "nosikov@list.ru",
    image: avatar5,
    age: 29,
    gender: "муж",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 7,
    name: "Ахмедов Артур",
    image: avatar6,
    age: 29,
    gender: "муж",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 8,
    name: "Блажевич Артур",
    image: avatar7,
    age: 32,
    gender: "муж",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 9,
    name: "Валиева Руфина",
    image: avatar8,
    age: 33,
    gender: "жен",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 10,
    name: "Волошина Виктория",
    image: avatar9,
    age: 30,
    gender: "жен",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 11,
    name: "Волошина Виктория",
    image: avatar9,
    age: 31,
    gender: "жен",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
  {
    id: 12,
    name: "Ахмедов Артур",
    image: avatar6,
    age: 29,
    gender: "муж",
    hasNewMessage: false,
    hasNotification: false,
    isChecked: false,
  },
];

export const tabs = ["Заметки", "Консультации", "Видео", "Мероприятия"];

export const notes = [
  {
    id: 1,
    text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
    date: "20.12.2019",
    mediaContent: null,
  },
  {
    id: 2,
    text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
    date: "20.12.2019",
    mediaContent: notesImg,
  },
];

export const consultations = [
  {
    id: 1,
    title: "Online консультация",
    date: "15.01.2019, 12:30-13:00",
    image: blueCamera,
    isConfirmed: true,
  },
  {
    id: 2,
    title: "Online консультация",
    date: "15.01.2019, 12:30-13:00",
    image: whiteCamera,
    isConfirmed: true,
  },
  {
    id: 3,
    title: "Личный приём",
    date: "15.01.2019, 12:30-13:00",
    image: personalVisit,
    isConfirmed: false,
  },
];

export const videos = [
  {
    id: 1,
    title: "Крабик, ходьба в бок в приседе с двумя резинками Кра…",
    author: "Астахова Е.В.",
    image: videoImage1,
    date: null,
  },
  {
    id: 2,
    title: "Разминка для локтевого сустава",
    author: "Астахова Е.В.",
    image: videoImage2,
    date: "15.01.2019 - 22.01.2019",
  },
  {
    id: 3,
    title: "Разминка для локтевого суставаРазминка для локтевого..",
    author: "Астахова Е.В.",
    image: videoImage3,
    date: "15.01.2019 - 22.01.2019",
  },
];

export const events = [
  {
    id: 1,
    title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
    image: eventImage,
    tags: [
      { name: "Вебинар", image: videoImage, description: "вебинар" },
      { name: "9 марта 2021", image: videoImage, description: "дата" },
      { name: "17:00", image: clockImage, description: "время" },
    ],
  },
  {
    id: 2,
    title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
    image: eventImage,
    tags: [
      { name: "Вебинар", image: videoImage, description: "вебинар" },
      { name: "9 марта 2021", image: videoImage, description: "дата" },
      { name: "17:00", image: clockImage, description: "время" },
    ],
  },
  {
    id: 3,
    title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
    image: eventImage,
    tags: [
      { name: "Вебинар", image: videoImage, description: "вебинар" },
      { name: "9 марта 2021", image: videoImage, description: "дата" },
      { name: "17:00", image: clockImage, description: "время" },
    ],
  },
];
