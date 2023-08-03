## Instruction

Explore the app at http://lb2-767c40a2a8ddaf63.elb.ap-south-1.amazonaws.com:3002

Inside an empty folder run the following commands from your shell

### `git pull https://github.com/ellierob/jsfe3.git`

### Without Docker

### `cd jsSrv && mv .env.B .env && yarn start`

### `cd .. && cd jsfe3 && mv BAK.env .env && yarn start`

### Docker

### `cd jsSrv && mv BAK.env .env && docker compose up`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in your browser.

Wait for vite to build the app.

When the screan loads, check the different tabs.

In the Home tab press "add book"

See the new entry updated

### Blockchain

Go to the 'FunMe' tab to press 'connect' to sample blockchain smart contract.