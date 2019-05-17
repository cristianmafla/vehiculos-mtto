import app from './utils';
import routesApp from './routesApp';

app.get('*',routesApp);

const PORT = process.env.PORT || 4000;

app.listen( PORT, () => console.log( `SERVER ON http://localhost:${PORT}` ));
