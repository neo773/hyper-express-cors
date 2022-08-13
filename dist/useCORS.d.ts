interface CORSOptions {
    origin: string;
    credentials: boolean;
    optionsRoute?: boolean;
}
declare const useCORS: (options: CORSOptions) => (request: HyperExpress.Request, response: HyperExpress.Response) => Promise<void>;
export default useCORS;
