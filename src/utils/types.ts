export type TLoginFormValues = {
  email: string;
  password: string;
};
export type TRegisterFormValues = { name: string } & TLoginFormValues;

export type TProfileFormValues = {
  isDisabled: boolean;
  icon: "EditIcon" | "CloseIcon";
};

export type TResetPasswordFormValues = {
  token: string;
  password: string;
};

export type TForgotPassword = {
  email: string;
};

export type TTubs = {
  activeTub: "buns" | "sauces" | "main";
};

export type TIconsPassword = "ShowIcon" | "HideIcon";

export type TUseModal = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type TIngredientRects = {
  tabsRect?: DOMRect;
  bunsRect?: DOMRect;
  saucesRect?: DOMRect;
  mainRect?: DOMRect;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: "bun" | "sauce" | "main";
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  unique?: string;
};
export type TOrder = {
  ingredients: Array<TIngredient>;
};
