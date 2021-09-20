import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface CustomTextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}
