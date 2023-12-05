import express from 'express';
import ViteExpress from 'vite-express';

const app = express();
const port = process.env.PORT || '4090';
ViteExpress.config({ printViteDevServerHost: true });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));