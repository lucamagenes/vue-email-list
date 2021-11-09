const root = new Vue({
    el: '#root',
    data: {
        users: [],
    },
    mounted() {

        for (let i = 0; i < 10; i++) {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(resp => {
                    console.log(resp.data.response);
                    const mail = resp.data.response;
                    this.users.push(mail)
                })
        };

    }
})