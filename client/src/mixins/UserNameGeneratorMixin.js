import md5 from "md5";
const generateUserName = (tenantId, email) => {
    if (!tenantId || !email) {
        return null;
    }
    return md5(
        [
            tenantId,
            email
        ].join().trim().toLowerCase()
    )
}
export default {
    computed: {
        username() {
            return generateUserName(this.tenantId, this.email)
        }
    },
};
