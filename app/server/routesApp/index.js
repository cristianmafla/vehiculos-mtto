import HTML from './htmlDevProd';

export default (req, res) => {
	res.send( HTML(process.env.NODE_ENV, req ) );
};
