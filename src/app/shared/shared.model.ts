export type User = {
  userName: string;
  password: string;
};

export type Alert = {
  alertType: "success" | "danger";
  message: string;
  autoCloseTime?:number;
};
