export interface IInputValues {
  title: string;
  workType: string;
}

export interface IUploadProps {
  isOpen: boolean;
  toggle: () => void;
}

export interface IOptionsCompress {
  maxSizeMB: number;
  maxWidthOrHeight: number;
  useWebWorker: boolean;
}

export const optionsCompress: IOptionsCompress = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};
