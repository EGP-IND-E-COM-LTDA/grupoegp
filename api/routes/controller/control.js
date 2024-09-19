import express from 'express';
import fetch from 'node-fetch';

const fetch = fetch()
const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3333');
});

export class App extends express( () => {
    
})

app.post('/contaazul/oauth/token', async (req, res) => {
    const request = 'https://api.contaazul.com/auth/authorize?redirect_uri={REDIRECT_URI}&client_id={CLIENT_ID}&scope=sales&state={STATE}'

    const client_id = 'UqQbo79WuzZrT1tvLsKpp8B92F4Vi2Pv'
    const client_secret = 'BFNVMDEKm3RlKHCHZP3YzkKsIskg691g'
    req.fetch = () => {
        return fetch('https://api.contaazul.com/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'password',
                username: 'seu_email',
                password: 'sua_senha',
                client_id,
                client_secret,
            }),
        });
  }
})
