export interface IUser {
  id: number;
  name: string;
  image: string;
  age: number;
  gender: "муж" | "жен";
  hasNewMessage: boolean;
  hasNotification: boolean;
  isChecked: boolean;
}

export interface INote {
  id: number;
  text: string;
  date: string;
  mediaContent?: string;
}

export interface IConsultation {
  id: number;
  title: string;
  date: string;
  image: string;
  isConfirmed: boolean;
}

export interface IVideo {
  id: number;
  title: string;
  author: string;
  image: string;
  date?: string | null;
}

interface ITag {
  name: string;
  image: string;
  description: string;
}

export interface IEvent {
  id: number;
  title: string;
  image: string;
  tags: ITag[];
}
