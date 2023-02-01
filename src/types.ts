export type User = {
    matchRegex?: boolean;
    gender: string
    name: {
        "title": string
        "first": string
        "last": string
    }
    location: {
        street: {
            number: Number
            name: string
        }
        city: string
        state: string
        country: string
        postcode: string
        coordinates: {
            latitude: string
            longitude: string
        }
        timezone: {
            offset: string
            description: string
        }
    }
    email: string
    login: {
        uuid: string
        username: string
        password: string
        salt: string
        md5: string
        sha1: string
        sha256: string
    }
    dob: {
        date: string
        age: Number
    }
    registered: {
        date: string
        age: Number
    }
    phone: string
    cell: string
    id: {
        name: string
        value: string
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    nat: string
    info: {
        seed: string
        results: Number
        page: Number
        version: string
    }
};