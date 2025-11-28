let users = [
    { id: "1", name: "Alice", age: 25 },
    { id: "2", name: "Bob", age: 30 }
]

export const getUsers = async () => {
    return users
}

export const getUserById = async (id) => {
    return users.find((user) => user.id === id)
}

export const createUser = async (data) => {
    const newUser = {
        id: String(Date.now()),
        ...data
    }

    users.push(newUser)
    return newUser
}

export const updateUser = async (id, data) => {
    const index = users.findIndex((user) => user.id === id)

    if (index === -1) return null;

    users[index] = { ...users[index], ...data }
    return users[index]
}

export const deleteUser = async (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index === -1) return null

    const deleted = users[index]
    users.splice(index, 1)

    return deleted
}