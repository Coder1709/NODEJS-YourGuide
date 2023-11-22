
const Employee = require ( '../models/Employee')


//show the list of Employess

const index =  ( req , res ,next) => {
     Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch( error => {
        res.json({
            message : "An Error Occurred"
        })
    })

}

//Show Single User
const show = ( req , res , next) => {
    let employeeId = req.body.EmployeeId
    Employee.findById(employeeId)
    .then(response =>{
        res.json({
            response
        })
    }).catch (error => {
        res.json({
            message : "An Error Occurred!"
        })
    })
}

//Store The Employeee

const store = (req , res , next ) => {

    let employee = new Employee ( {
        name : req.body.name,
        age : req.body.age,
        designation : req.body.designation,
        email : req.body.email,
        phone : req.body.phone
    })
    employee.save()
    .then(response => {
        res.json ( {

            message : "Employee Added SuccessFully"

        })
    })
    .catch ( error => {
        res.json ( {
            message : " An error Occurred"
        })
    })


}


//update an employee using empid

const update = ( req , res , next) => {
    let employeeId = req.body.EmployeeId;


    let updateData = {
        name : req.body.name,      
        designation : req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age

    }

    Employee.findByIdAndUpdate(employeeId , {$set : updateData })
    .then (() => {
        res.json ( {
            message : "Employee updated Successfully"
        })
    })
    .catch ( error => {
        res.json ( {
            message : "An error Ocurred while updating"
        })
    })




}

//Delete an Employeee Data


const destroy = ( req , res , next) => {
    let employeeId = req.body.EmployeeId;

    Employee.findByIdAndRemove(employeeId)
    .then ( () => {
        res.json ( {
            message : " Employee Successfully deleted"
        })
    })
    .catch ( (error) => {

        res.json ( {

            message : " An error occurred while deleting"

        })

    })
}



module.exports = {
    index,show,store,update,destroy

}
