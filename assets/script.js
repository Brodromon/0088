const {
    createApp
} = Vue

createApp({
    data() {
        return {
            services: [{
                    title: 'Manual tour booking',
                    value: 11
                },
                {
                    title: 'Package tours',
                    value: 3
                },
                {
                    title: 'Hotels',
                    value: 1
                }
            ],
            comments: [{
                    author: 'Samuel Jackson',
                    date: 1649444919000,
                    message: "Hey Eva! You're cool. Nice pic!"
                },
                {
                    author: 'Angela Deimon',
                    date: 1649444919000,
                    message: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic."
                },
                {
                    author: 'Ronald Harris',
                    date: 1649444919000,
                    message: "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?"
                },
            ],
            newComment: '',

            months: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        }
    },
    methods: {
        getColWidth(val) {
            const services = this.services.map(el => el.value)
            const MAX_VALUE = Math.max(...services);

            return Math.round((100 / MAX_VALUE) * val);
        },
        getTotalServicesValue() {
            const services = this.services.map(el => el.value)

            return services.reduce((a, b) => a + b)
        },
        getDate(timestamp) {
            const date = new Date(timestamp)
            return `${date.getDate()} ${this.months[date.getMonth()]} ${date.getFullYear()}`
        },

        addComment(e) {
            if (!!!this.newComment.trim()) return;

            if ((e.type == 'keydown' && e.ctrlKey) || e.type == 'click') {
                const author = {
                    author: 'Unknown user',
                    date: Date.now(),
                    message: this.newComment
                }

                this.comments.unshift(author);

                console.log(author);

                this.newComment = '';
            }
        }
    }
}).mount('#app')