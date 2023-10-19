export interface ErroHandlerProps {
  message: string;
  setMessage: (message: string) => void;
  handleReqError: (e: any) => void;
}
