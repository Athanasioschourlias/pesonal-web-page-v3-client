type login_resp = {
    token: string,
    user: {
        role: string
    }

}

type User = {
    _id: string,
    "username": string,
    "role": string,
    "password": string
}

export {
	login_resp,
	User
}