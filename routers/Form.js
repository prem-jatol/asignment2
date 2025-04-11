const {Router} = require("express");
const FormCtr = require("../controllers/FormCtr");

const FormRouter = Router();

FormRouter.post(
    "/create-form",
    (req, res)=>{
        const result = new FormCtr().createForm(req.body);
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

FormRouter.post(
    "/get-form/:id",
    (req, res)=>{
        const formId = req.params.id;
        const result = new FormCtr().getFormShema(formId);
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

FormRouter.get(
    "/get-forms",
    (req, res)=>{
        const result = new FormCtr().getAllForms();
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

FormRouter.delete(
    "/delete-form/:id",
    (req, res)=>{
        const id = req.params.id;
        const result = new FormCtr().deleteForm(id);
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

module.exports = FormRouter;