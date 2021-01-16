const github = new GitHub;
const ui = new UI;

const username = document.getElementById('searchUser');

username.addEventListener('keyup', (e) =>{
    const user = e.target.value;

    if(user !== ''){
        github.getUser(user)
            .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('Not Found', 'alert alert-danger'); 
            }else{
                ui.getDisplay(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        ui.clearProfile();
    }
});