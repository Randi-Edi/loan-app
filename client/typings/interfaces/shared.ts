import { SxProps, Theme } from "@mui/material/styles";
import { BaseSyntheticEvent } from "react";

interface IInputFieldStyles {
  width?: string;
  mt?: string;
  mb?: string;
  iconPl?: string;
}

export interface IInputField {
  label?: string;
  fieldName: string;
  type: string;
  onChange?: (e: BaseSyntheticEvent) => void;
  onFocus?: (e: BaseSyntheticEvent) => void;
  value: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched: boolean | undefined;
  error: string | undefined;
  styles?: IInputFieldStyles;
  size?: "medium" | "small";
  sx?: SxProps<Theme>;
  disabled?: boolean;
  placeholder?: string;
  isCurrencyInput?: boolean;
}

export interface IFileInput {
  fieldName: string;
  onChange?: (e: any) => void;
  onFocus?: (e: BaseSyntheticEvent) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched: boolean | undefined;
  error: string | undefined;
  styles?: IInputFieldStyles;
  sx?: SxProps<Theme>;
  disabled?: boolean;
}

export interface IGetValidationError {
  error: string;
}

export interface IClientRequest {
  fullName: string;
  amount: string;
  imageUrl: File | null;
}

export interface IClientResponse {
  fullName: string;
  amount: string;
  imageUrl: string;
}