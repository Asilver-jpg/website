interface StartOptions{
    characters?:string
    speed?:number
}

declare module 'baffle' {
    export default function baffle(element: string | HTMLElement, options?:StartOptions): {
      start: () => void;
      reveal: (duration: number) => void;
      text: (text: string) => void;
      remove: () => void;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      on: (event: string, callback: Function) => void;
      set: (options:StartOptions) => void;
    };
  }