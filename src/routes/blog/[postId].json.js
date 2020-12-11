require('dotenv').config();

import axios 	from 'axios';

const { BUILD, SERVER_API_PROD, SERVER_API_DEV } = process.env;

export function get(req, res) {
    const { postId } = req.params;
    let serverApi = BUILD === "production" ? SERVER_API_PROD : SERVER_API_DEV;

    axios.get(`${serverApi}/blog-management/post/get-post/${postId}`)
		.then(resp => {
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });
    
            res.end(JSON.stringify({ 
                postData: resp.data
            }));    
		}).catch((error) =>{
			res.writeHead(404, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });
    
            res.end(JSON.stringify({
                message: `Not found`
            }));
		}
	);
}
