import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';


const proxy = 'http://127.0.0.1:7890';

const agent = new HttpsProxyAgent(proxy);


const request = async() => {

  try {
     const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        },
        body: {
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              "role": "user",
              "content": "Say this is a test!"
            }
          ],
          "temperature": 0.7
        },
        agent
     })
      
    console.log(res.json(), 'res');
    
    
  } catch (error) {
    console.log(error, 'error');
  }
  
}

request()



