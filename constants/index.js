export const DEFAULT_MESSAGE_MODAL = {
  show: false,
  title: null,
  message: 'Hello world!',
  component: null,
  options: {
    color: 'primary',
    width: 400,
    zIndex: 99999,
  },
  btnOk: {
    text: 'Ок',
    show: true,
    fn: null,
  },
  btnCancel: {
    text: 'Отмена',
    show: false,
    fn: null,
  },
};

export const DEFAULT_NOTIFY_SNACKBAR = {
  show: false,
  title: null,
  message: 'Ошибка!',
  icon: 'mdi-close-circle',
  options: {
    color: '#ff0000',
    right: true,
    timeout: 3000,
    multiLine: false,
    autoHeight: false,
  },
};
