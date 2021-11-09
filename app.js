const root = new Vue({
    el: '#root',
    data: {
        userNumber: '',
        pcNumber: '',
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail');

    }
})