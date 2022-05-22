// @ts-ignore
import { FilePondOptions } from "filepond";

declare module "filepond" {
  export interface FilePondOptions {
    /** Enable or disable video preview mode */
    allowVideoPreview?: boolean;

    /** Enable or disable audio preview mode */
    allowAudioPreview?: boolean;
  }
}
