class GitHub{

    constructor(){
        this.client_id = '5e6bd386b9d2e5473724';
        this.client_secrets = 'a7618b4a6123d94e56d4c0aff00dea6f0088980c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(username){
        const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}