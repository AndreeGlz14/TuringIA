import z from 'zod'

export const excerciseValidate = z.object({
    name: z.string({
        required_error: 'name required'
    })
        
,
    reps: z.number({
        required_error: 'reps required',
        invalid_type_error: 'numbers only'
    })

    ,
    muscle: z.string({
        required_error: 'muscle required'
    }),

    score: z.number({
        required_error: 'score required',
        invalid_type_error: 'numbers only'
    }),
    imgExercise: z.string().optional()
})