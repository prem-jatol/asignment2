const Form = require("../models/Form");

class FormCtr {
  async createForm(data) {
    return new Promise((res, rej) => {
      try {
        const { formName, formId, colorPallet, formArr } = data;
        const form = new Form({
          formName,
          formId,
          colorPallet,
          formSchema: formArr,
        });
        form
          .save()
          .then((success) => {
            res({
              msg: "this is formSchema",
              status: 1,
              formSchema: form.formSchema,
            });
          })
          .catch((error) => {
            rej({
              msg: "Coming any error to save form Schema",
              status: 0,
            });
          });
      } catch (error) {
        rej({
          msg: "err comming duering create form Schema",
          status: 0,
        });
      }
    });
  }

  getFormShema(formId) {
    return new Promise(async (res, rej) => {
      try {
        const findForm = await Form.findOne({ formId });
        if (findForm) {
          res({
            msg: "find form",
            formSchema: findForm,
            status: 1,
          });
        } else {
          rej({
            msg: "form Not exist",
            status: 0,
          });
        }
      } catch (error) {
        console.log(error.message);
        rej({
          msg: "Not exist form",
          status: 0,
        });
      }
    });
  }

  getAllForms() {
    return new Promise(async (res, rej) => {
      const findAllForms = await Form.find();
      console.log(findAllForms);
      if (findAllForms) {
        res({
          msg: "this all forms was created",
          allForms: findAllForms,
          status: 1,
        });
      } else {
        rej({
          msg: "not created even one form",
          status: 0,
        });
      }
    });
  }

  deleteForm(id){
    return new Promise(
        async (res, rej)=>{
            try {
                Form.deleteOne({_id: id})
                .then(result => {
                    res({
                        msg: "form deleted",
                        status: 1
                    })
                  })
                  .catch(err => {
                    console.error('Error deleting form:', err);
                    rej({
                        msg: "form wasn't delet",
                        status: 0
                    })
                  });

            } catch (error) {
                rej({
                    msg: "Internal server error on FormCtr",
                    status: 0
                })
            }
        }
    )
  }
}

module.exports = FormCtr;
