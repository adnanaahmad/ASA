export interface Translation {
  BUTTONS: Buttons;
  STRINGS: Strings;
  STATUS: Status;
}

export interface Strings {
  APP_TITLE: string;
  USERNAME: string;
  FIRSTNAME: string;
  LASTNAME: string;
  EMAIL: string;
  PASSWORD: string;
  CONFIRM_PASSWORD: string;
  WC_TO: string;
  REM_PASS: string;
}

export interface Buttons {
  LOGIN: string;
  LOGOUT: string;
}

export interface Status {
  DEFAULT: string;
  INFO: string;
  SUCCESS: string;
  WARNING: string;
  ERROR: string;
  CUSTOM: string;
}
