class Profile{
    constructor()
    {
        this.clientId="",
        this.clientSecret=""
    }

    async getProfile(username){

        const profileRispons = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        // Parse JSON
        const profile = await profileRispons.json()

        return profile

    }

}