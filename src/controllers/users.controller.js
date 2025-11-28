import * as UserService from "../services/users.service.js"

export const getUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal error" })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);

        if (!user) return res.status(404).json({ message: "Usuario no encontrado" })

        return res.json(user)
            
    } catch (error) {
        res.status(500).json({ message: "Internal error" })
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = await UserService.createUser(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: "Internal error" })
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserService.updateUser(req.params.id, req.body)

        if (!updateUser) return res.status(404).json({ message: "User not found" })

        res.json(updateUser)
    } catch (error) {
        res.status(500).json({ message: "Internal error" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleted = await UserService.deleteUser(req.params.id)

        if (!deleted) return res.status(404).json({ message: "User not found" })

        return res.json({ message: "User deleted" })
    } catch (error) {
        res.status(500).json({ message: "Internal error" })
    }
}