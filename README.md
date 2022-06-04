Add a .env.local file with the client account

Make sure to name variables like this:

OPERATOR_ID=XXX
OPERATOR_KEY=XXX

Afterwards, call 'npm run dev' and make sure you are on an https server so that hashconnect can be used.
Ngrok is what I used for this.