interface CORSOptions {
    origin: string;
    credentials: boolean;
    optionsRoute?: boolean;
}
declare const useCORS: (options: CORSOptions) => (request: Request, response: Response) => Promise<void>;
export default useCORS;
