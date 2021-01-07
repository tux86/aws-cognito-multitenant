export default {
    computed: {
        tenants() {
            return [
                {value: null, text: 'Please select an client account'},
                {
                    value: "CLIENT_A",
                    text: "Client A",
                },
                {
                    value: "CLIENT_B",
                    text: "Client B",
                },
                {
                    value: "CLIENT_C",
                    text: "Client C",
                },
            ]
        }
    },
};
