const root = new Vue({
    el: '#root',
    data: {
        users: [
            {
                user: 1,
                userMail: '',
            },
            {
                user: 2,
                userMail: '',
            },
            {
                user: 3,
                userMail: '',
            },
            {
                user: 4,
                userMail: '',
            },
            {
                user: 5,
                userMail: '',
            },
            {
                user: 6,
                userMail: '',
            },
            {
                user: 7,
                userMail: '',
            },
            {
                user: 8,
                userMail: '',
            },
            {
                user: 9,
                userMail: '',
            },
            {
                user: 10,
                userMail: '',
            },
        ],
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(resp => {
                console.log(resp.data.response);
                const mail = resp.data.response;
                this.users.userMail = mail;
                console.log(this.users.userMail);
            })

    }
})