export const defineTextMenu = (text: string) => {
  switch (text) {
    case "Заметки":
      return "Новая заметка";
    case "Консультации":
      return "Записать";
    case "Видео":
    case "Мероприятия":
      return "Рекомендовать";
  }
};
