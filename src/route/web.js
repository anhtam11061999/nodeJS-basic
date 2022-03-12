import express from 'express';
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/',homeController.getHomepage);
    router.get('/about', (req, res) => {
        res.send('About')
    })
    return app.use('/', router);
    // thêm tiền tố url trước các router
    // return app.use('/abc', router);
}

export default initWebRoute;