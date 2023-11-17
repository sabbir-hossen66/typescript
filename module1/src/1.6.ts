{
    //Learning function
    //Normal function
    //Arrow function

    function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    add(2, 3)

    const addArrow = (num1: number, num2: number): number => num1 + num2

    //object er moddhe kono function thakle take method bola hoy

    const poorUser = {
        name: 'sabbir',
        blance: 0,
        // addBlance(blance: number): string {
        //     return `My new blance is :${this.blance + blance}`

        // }

        addBlance(blance: number): string {
            return `my new blance is: ${this.blance + blance}`
        }
    }

    const arr: number[] = [1, 2, 3, 4, 5, 6]

    // const newArr: number[] = arr.map((elem: number): number => elem * elem)

    const newArray: number[] = arr.map((elem: number): number => elem * elem)


}