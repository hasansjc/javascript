const arr = [
    {
        firtname:"ahmed",
        lastname:"hasan",
        class :10,
        house:"green"
    },
    {
        firtname:"amit",
        lastname:"yadav",
        class :12,
        house:"green"
    },
    {
        firtname:"ahmed",
        lastname:"abdullah",
        class :10,
        house:"blue"
    },
    {
        firtname:"aysh",
        lastname:"srivastava",
        class :12,
        house:"green"
    },
    {
        firtname:"ahmed",
        lastname:"khan",
        class :8,
        house:"green"
    }
]
const myfunc = elem => elem.class===10
console.log(arr.filter(myfunc)); 

