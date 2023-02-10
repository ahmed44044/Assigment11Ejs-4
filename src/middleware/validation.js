
const dataMethod=['body','params','query']

export const validation =(schema , redirectPath)=>{
return (req,res,next)=>{
    const validationArr=[]
    for (const key of dataMethod) {
        if (schema[key]) {
            const validationResult= schema[key].validate(req[key],{ abortEarly:false})
            if (validationResult?.error) {
                for (const ele of validationResult.error.details) {
                validationArr.push(ele.context.label)                    
                }
            }
        }
    }
    if (validationArr.length) {
        req.flash('oldInputs',req.body)
        req.flash('validationErr',validationArr)
        res.redirect(redirectPath)
    } else {
        next()
    }
}
 
}