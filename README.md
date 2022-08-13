# Hyper-Express CORS Middleware

## Usage
```javascript
import useCORS from 'hyper-express-cors'

const domain = 'http://localhost:8080'


webserver.use(
	useCORS({ origin: domain, credentials: true })
)

webserver.options('/*', useCORS({
	origin: domain,
	credentials: true,
	optionsRoute: true
}))

webserver.listen(3000)
```