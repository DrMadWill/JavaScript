class Profile{
    constructor()
    {
        this.clientId="",
        this.clientSecret=""
    }

    async getProfile(username){

        // profile Respons
        const profileRispons = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        // Parse JSON
        const profile = await profileRispons.json()


        const todoRespons = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${profile[0].id}`)

        const todo = await todoRespons.json();

        return {profile : profile,todo : todo}

    }

}