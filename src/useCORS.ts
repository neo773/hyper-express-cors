import { Request, Response } from 'hyper-express'

interface CORSOptions {
    origin: string
    credentials: boolean
    optionsRoute?: boolean
}

const useCORS = (options: CORSOptions) => {
    return async (request: Request, response: Response) => {
        response.header('vary', 'Origin')
        response.header('Access-Control-Allow-Headers', 'content-type')
        response.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET')
        response.header('Access-Control-Allow-Origin', options.origin)
        response.header('Access-Control-Allow-Credentials', options.credentials.toString())

        if (options.optionsRoute === true) {
            response.send('')
        }
    }
}


export default useCORS