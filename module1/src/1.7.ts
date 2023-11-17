{

    //learn spread operator
    const bros1: string[] = ['mir', 'firoz', 'mizan',]
    const bros2: string[] = ['jhankar', 'mezba', 'parsian']

    bros1.push(...bros2)

    //object er khetre spread operator

    const mentors1 = {
        typescript: 'mezba',
        redux: 'mir',
        dbms: 'Mizan'
    }
    const mentors2 = {
        prisma: 'firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }

    //learn rest operator

    // const greetFriends = (...friend: string[]) => {
    //     friend.forEach((friend: string) => console.log(`hi:string${friend}`)
    //     )
    // }

    const manyFriend = (...friend: string[]) => {
        friend.forEach((friend: string) => console.log(`hi${friend}`)

        );
    }
    manyFriend('sabbir', 'sumaiya', 'sourav', 'shibli')

    // greetFriends('abul', 'kabul', 'babul', 'jabul')
    "i am sabbir"

}