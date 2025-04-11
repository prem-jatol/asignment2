const {Router} = require("express");
const UserCtr = require("../controllers/UserCtr");

const UserRouter = Router();

UserRouter.post(
    "/create-form",
    (req, res)=>{
        const result = new UserCtr().formFill(req.body);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

module.exports = UserRouter;