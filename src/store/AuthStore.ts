import { observable, action } from 'mobx';

class AuthStore {
    @observable errors = undefined;

    @observable values = {
        username: '',
        password: '',
    };

    @action setUsername(username: string) {
        this.values.username = username;
    }

    @action setPassword(password: string) {
        this.values.password = password;
    }

    @action reset() {
        this.values.username = '';
        this.values.password = '';
    }

    @action login() {
        console.log(this.values)

        // this.errors = undefined;
        // return agent.Auth.login(this.values.username, this.values.password)
        //     .then(({ user }) => commonStore.setToken(user.token))
        //     .then(() => userStore.pullUser())
        //     .catch(action((err) => {
        //         this.errors = err.response && err.response.body && err.response.body.errors;
        //         throw err;
        //     }))
    }

    @action register() {
        console.log('ща зарегаю тебя, сына')
        console.log(this.values.username, this.values.password)

        // this.errors = undefined;
        // return agent.Auth.register(this.values.username, this.values.password)
        //     .then(({ user }) => commonStore.setToken(user.token))
        //     .then(() => userStore.pullUser())
        //     .catch(action((err) => {
        //         this.errors = err.response && err.response.body && err.response.body.errors;
        //         throw err;
        //     }))
    }

    @action logout() {
        // commonStore.setToken(undefined);
        // userStore.forgetUser();
        //
        // return Promise.resolve();
    }
}

export default new AuthStore();
