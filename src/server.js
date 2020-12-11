require('dotenv').config();

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, BUILD, TOKEN_KEY, SERVER_API_PROD, SERVER_API_DEV, IMG_URL } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: () => ({
				NODE_ENV: BUILD, 
				TOKEN_KEY: TOKEN_KEY, 
				SERVER_API: BUILD === "production" ? SERVER_API_PROD : SERVER_API_DEV,
				IMG_URL: IMG_URL,
			}),
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
