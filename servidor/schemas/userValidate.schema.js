import z from 'zod'

export const userRegisterValidateData = z.object({
    username: z.string({
        required_error: 'username required'
    }),
    name: z.string({
        required_error: 'name required'
    }),
    last_name: z.string({
        required_error: 'last name required'
    }),
    email: z.string({
        required_error: 'email required'
    }).email({
        message: 'invalid email'
    }),
    password: z.string({
        required_error: 'name required'
    }).min(6,{
        message: 'Password must contain 6 characteres or more'
    }),
    age: z.number({
        required_error: 'age required',
        invalid_type_error: 'only numbers'
    })
})

export const  userLoginValidateData = z.object({
    email: z.string({
        required_error: 'email required'
    }).email({
        message: 'invalid email'
    }),

    password: z.string({
        required_error: 'name required'
    }).min(6,{
        message: 'Password must contain 6 characteres or more'
    })

})